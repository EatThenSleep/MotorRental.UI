import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotorbikeService } from '../services/motorbike.service';
import { EditMotorBike } from '../models/edit-motorbike.model';
import { Motorbike } from '../models/motorbike.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-motorbike',
  templateUrl: './edit-motorbike.component.html',
  styleUrls: ['./edit-motorbike.component.css']
})
export class EditMotorbikeComponent implements OnInit {
  motor: Motorbike | null = null;
  motorbike: EditMotorBike | null = null;

  constructor(
    private route: ActivatedRoute,
    private motorbikeService: MotorbikeService,
    private toastr : ToastrService
  ) {}

  ngOnInit(): void {
    const motorbikeId = this.route.snapshot.paramMap.get('id');
    if (motorbikeId) {
      this.loadMotorbike(motorbikeId);
    }
  }

  loadMotorbike(id: string): void {
    this.motorbikeService.getDetailMotorbikeHttp(id).subscribe(
      (data: any) => {
        console.log('Motorbike data received:', data);
        if (data.isSuccess && data.result) {
          this.motor = data.result;
          this.mapMotorToEditMotorbike();
        } else {
          console.error('Error: Unexpected response structure', data);
        }
      }
    );
  }

  mapMotorToEditMotorbike(): void {
    if (this.motor) {
      this.motorbike = {
        Name: this.motor.name,
        status: this.motor.status,
        Description: this.motor.description,
        PriceDay: this.motor.priceDay,
        PriceWeek: this.motor.priceWeek,
        PriceMonth: this.motor.priceMonth,
        LicensePlate: this.motor.licensePlate,
        Image: this.motor.motorbikeAvatar,
      };
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/webp'];
      if (!validImageTypes.includes(file.type)) {
        this.toastr.error('Định dạnh file không hợp lệ.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.motorbike) {
          this.motorbike.Image = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  getMotorbikeType(type: number): string {
    if (type === 1) return 'Xe số';
    else if (type === 2) return 'Xe tay ga';
    return 'Xe tay côn';
  }

  getMotorbikeStatus(status: number): string {
    if (status === 1) return 'Enable';
    else if (status === 2) return 'Busy';
    return 'Maintain';
  }

  updateMotorbike(): void {
    const motorbikeId = this.route.snapshot.paramMap.get('id');
    if (motorbikeId && this.motorbike) {
      this.motorbikeService.updateMotorbikeHttp(motorbikeId, this.motorbike).subscribe(
        response => {
          this.toastr.success('Cập nhật thông tin xe thành công');
          console.log('Update response:', response);
        },
        error => {
          this.toastr.error('Lỗi . Không thể cập nhật xe');
          console.error('Update error:', error);
        }
      );
    }
  }
}
