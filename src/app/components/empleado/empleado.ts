import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado as EmpleadoModel } from '../../models/empleado';

@Component({
  selector: 'app-empleado',
  imports: [CommonModule, FormsModule],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
})
export class EmpleadoComponent implements OnInit {
  empleados: EmpleadoModel[] = [];

  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      (res: EmpleadoModel[]) => {
        this.empleadoService.empleados = res;
        this.empleados = res;
      },
      (err) => console.error(err)
    );
  }

  addEmpleado(form: NgForm) {
    this.empleadoService.createEmpleado(form.value).subscribe(
      () => {
        this.getEmpleados();
        form.reset();
      },
      (err) => console.error(err)
    );
  }

}
