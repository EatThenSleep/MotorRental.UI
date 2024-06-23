import { Component } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { Appointment } from '../models/Appointment.model';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
})
export class AppointmentsListComponent {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentsService) {}

  ngOnInit(): void {
    this.getAllAppointment();
  }
  getAllAppointment() {
    this.appointmentService.getAppointmentsHttp().subscribe((res: any) => {
      if (res.isSuccess) {
        var result = res.result
        for (let i = 0; i < result.length; i++) {
          var temp = new Appointment();
          temp.Id = result[i].id
          temp.Customer.id = result[i].customer.id
          temp.Customer.name =  result[i].customer.name
          temp.Customer.phoneNumber =  result[i].customer.phoneNumber
          temp.Motorbike.id = result[i].motorbike.id
          temp.Motorbike.name = result[i].motorbike.name
          temp.Motorbike.licensePlate = result[i].motorbike.licensePlate
          temp.RentalBegin =  result[i].rentalBegin
          temp.RentalEnd =  result[i].rentalEnd
          temp.RentalReturn =  result[i].rentalReturn
          temp.LocationReceive =  result[i].locationReceive
          temp.StatusAppointment =  result[i].statusAppointment
          temp.StatusPayment =  result[i].statusPayment
          temp.RentalPrice =  result[i].rentalPrice

          // create surcharges
          for(let j = 0; j < result[i].surcharges.length; j++){
            temp.Surcharge.push(result[i].surcharges[j])
          }
          this.appointments.push(temp)
        }
        console.log(this.appointments)
      }
    });
  }
}
