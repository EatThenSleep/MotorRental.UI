import { Component, OnInit } from '@angular/core';
import { MotorbikeService } from '../services/motorbike.service';
import { Motorbike } from './models/motorbike.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.css']
})
export class HomePageListComponent implements OnInit {
  motorbikes: Motorbike[] = [];
  filteredMotorbikes: Motorbike[] = [];
  keyword: string = '';
  selectedType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 0;
  zoomedImageId: string | null = null;
  sortedColumn: string = 'name';
  sortDescending: boolean = false;

  constructor(private motorbikeService: MotorbikeService, private router: Router) {}

  ngOnInit(): void {
    this.getAllMotorbikes();
  }

  getAllMotorbikes(): void {
    this.currentPage = 1;
    this.motorbikeService.getAllMotorbikeHttp().subscribe((res: any) => {
      this.motorbikes = res.result;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredMotorbikes = this.motorbikes.filter(motorbike => {
      return (!this.selectedType || motorbike.type.toString() === this.selectedType);
    });
  }

  searchAndFilterMotorbikes(): void {
    this.currentPage = 1;
    const keyword = this.keyword.trim() || undefined;

    this.motorbikeService.search(keyword).subscribe((res: any) => {
      this.motorbikes = res.result;
      this.applyFilters();
    });
  }

  onSearchInputChange(keyword: string | null): void {
    if (keyword !== null) {
      this.keyword = keyword;
      this.searchAndFilterMotorbikes();
    }
  }

  viewDetail(motorbikeId: string): void {
    this.router.navigate(['/motorbike', motorbikeId]);
  }

  getFormattedType(type: number): string {
    if(type ===1){
      return 'Xe số';
    }
    else if(type===2){
      return 'Xe tay ga';
    }
    else{
        return 'Xe côn';
    }
  }
  

  onTypeFilterChange(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }
}
