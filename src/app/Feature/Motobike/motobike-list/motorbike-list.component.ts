import { Component, OnInit } from '@angular/core';
import { MotorbikeService } from '../services/motorbike.service';
import { Motorbike } from '../models/motorbike.model';

@Component({
  selector: 'app-motorbike-list',
  templateUrl: './motorbike-list.component.html',
})
export class MotorbikeListComponent implements OnInit{
  motorbikes: Motorbike[] = [];


  constructor(private motorbikeService: MotorbikeService){}


  ngOnInit(): void {
    this.motorbikeService.getAllBlogPosts().subscribe((res: any) => {
      this.motorbikes = res.result

    })
  }

  getType(type: number){
    if(type == 1) return "Xe số"
    else if(type == 2) return "Xe tay ga"
    return "Xe tay côn"
  }

  getStatus(status: number){
    if(status == 1) return "Enable"
    else if(status == 2) return "Busy"
    return "Maintain"
  }
}
