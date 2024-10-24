import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  formularioform;
  constructor(private formbuilder: FormBuilder){
    this.formularioform = this.formbuilder.group({
      nombre: '',
      apellido: ''
    });
  }
  

}


