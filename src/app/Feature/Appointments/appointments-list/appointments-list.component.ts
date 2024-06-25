import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { Appointment } from '../models/Appointment.model';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
})
export class AppointmentsListComponent implements OnInit, AfterViewInit {
  appointments: Appointment[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 0;

  constructor(private appointmentService: AppointmentsService) {}

  ngOnInit(): void {
    this.getAllAppointment();
  }

  ngAfterViewInit(): void {}

  getAllAppointment() {
    this.appointmentService.getAppointmentsHttp().subscribe((res: any) => {
      if (res.isSuccess) {
        const result = res.result;
        for (let i = 0; i < result.length; i++) {
          const temp = new Appointment();
          temp.Id = result[i].id;
          temp.Customer.id = result[i].customer.id;
          temp.Customer.name = result[i].customer.name;
          temp.Customer.phoneNumber = result[i].customer.phoneNumber;
          temp.Motorbike.id = result[i].motorbike.id;
          temp.Motorbike.name = result[i].motorbike.name;
          temp.Motorbike.licensePlate = result[i].motorbike.licensePlate;
          temp.RentalBegin = result[i].rentalBegin;
          temp.RentalEnd = result[i].rentalEnd;
          temp.RentalReturn = result[i].rentalReturn;
          temp.LocationReceive = result[i].locationReceive;
          temp.StatusAppointment = result[i].statusAppointment;
          temp.StatusPayment = result[i].statusPayment;
          temp.RentalPrice = result[i].rentalPrice;

          for (let j = 0; j < result[i].surcharges.length; j++) {
            temp.Surcharge.push(result[i].surcharges[j]);
          }
          temp.Total =
            temp.RentalPrice +
            temp.Surcharge.reduce((acc, curr) => acc + curr.amount, 0);

          this.appointments.push(temp);
        }
        this.calculateTotalPages();
      }
    });
  }

  getAppointmentStatus(status: number) {
    if (status === 0) return 'Process';
    else if (status === 1) return 'Accepted';
    else if (status === 2) return 'Cancel';
    return 'Done';
  }

  getPaymentStatus(status: number) {
    if (status === 0) return 'Unpaid';
    return 'Paid';
  }

  get paginatedAppointments(): Appointment[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.appointments.slice(startIndex, startIndex + this.itemsPerPage);
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.appointments.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
