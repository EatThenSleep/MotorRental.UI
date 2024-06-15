import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotorbikeService } from '../services/motorbike.service';
import { Motorbike } from '../models/motorbike.model';

@Component({
  selector: 'app-motorbike-detail',
  templateUrl: './motorbike-detail.component.html',
  styleUrls: ['./motorbike-detail.component.css'],
})
export class MotorbikeDetailComponent implements OnInit {
  motorbike: Motorbike | null = null;

  constructor(
    private route: ActivatedRoute,
    private motorbikeService: MotorbikeService
  ) {}

  ngOnInit(): void {
    this.getDetailMotorbike();
  }

  getDetailMotorbike(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.motorbikeService.getDetailMotorbikeHttp(id).subscribe((res: any) => {
        this.motorbike = res.result;
      });
    }
  }

  getMotorbikeType(type: number): string {
    switch (type) {
      case 1:
        return 'Xe số';
      case 2:
        return 'Xe tay ga';
      case 3:
        return 'Xe côn';
      default:
        return 'Unknown';
    }
  }

  getMotorbikeStatus(status: number): string {
    switch (status) {
      case 1:
        return 'Enable';
      case 2:
        return 'Busy';
      case 3:
        return 'Maintain';
      default:
        return 'Unknown';
    }
  }
}
