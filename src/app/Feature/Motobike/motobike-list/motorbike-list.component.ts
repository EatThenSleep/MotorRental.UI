import { Component, OnInit } from '@angular/core';
import { MotorbikeService } from '../services/motorbike.service';
import { Motorbike } from '../models/motorbike.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-motorbike-list',
  templateUrl: './motorbike-list.component.html',
  styleUrls: ['./motorbike-list.component.css'],
})
export class MotorbikeListComponent implements OnInit {
  motorbikes: Motorbike[] = [];
  keyword: string = '';
  selectedStatus: string = '';
  selectedType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 0;
  zoomedImageId: string | null = null;

  private searchSubject = new Subject<string>();

  constructor(private motorbikeService: MotorbikeService) {}

  ngOnInit(): void {
    this.getAllMotorbikes();
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
      this.searchAndFilterMotorbikes();
    });
  }

  getAllMotorbikes(): void {
    this.currentPage = 1;
    this.motorbikeService.getAllMotorbikeHttp().subscribe((res: any) => {
      this.motorbikes = res.result;
      this.calculateTotalPages();
    });
  }

  getType(type: number) {
    if (type === 1) return 'Xe số';
    else if (type === 2) return 'Xe tay ga';
    return 'Xe tay côn';
  }

  getStatus(status: number) {
    if (status === 1) return 'Enable';
    else if (status === 2) return 'Busy';
    return 'Maintain';
  }

  clearSearchAndFilter(): void {
    this.keyword = '';
    this.selectedStatus = '';
    this.selectedType = '';
    this.getAllMotorbikes();
  }

  searchAndFilterMotorbikes(): void {
    this.currentPage = 1;
    const status = this.selectedStatus
      ? Number(this.selectedStatus)
      : undefined;
    const type = this.selectedType ? Number(this.selectedType) : undefined;
    const keyword = this.keyword.trim() || undefined;

    this.motorbikeService
      .searchAndFilterHttp(keyword, status, type)
      .subscribe((res: any) => {
        this.motorbikes = res.result;
        this.calculateTotalPages();
      });
  }

  onSearchInputChange(keyword: string): void {
    this.searchSubject.next(keyword);
  }

  calculateTotalPages(): void {
    const totalItems = this.motorbikes.length;
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get paginatedMotorbikes(): Motorbike[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.motorbikes.slice(start, end);
  }

  toggleImageModal(id: string): void {
    if (this.zoomedImageId === id) {
      this.zoomedImageId = null;
    } else {
      this.zoomedImageId = id;
    }
  }
}
