import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  nombre: string = '';
  cedula: string = '';
  fechaCumple: Date = new Date();
  pasatiempo: string = '';

  enviar(): void {
    console.log('Enviando información del usuario:');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Cédula: ${this.cedula}`);
    console.log(`Fecha de Cumpleaños: ${this.fechaCumple}`);
    console.log(`Pasatiempo: ${this.pasatiempo}`);
  }
  subirFoto(evento: any) {
    const archivo = evento.target.files[0];
  }
}
