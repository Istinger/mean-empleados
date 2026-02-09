import { Component, signal } from '@angular/core';
import { EmpleadoComponent } from './components/empleado/empleado';

@Component({
  selector: 'app-root',
  imports: [EmpleadoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
