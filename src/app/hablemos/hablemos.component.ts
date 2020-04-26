import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hablemos',
  templateUrl: './hablemos.component.html',
  styleUrls: ['./hablemos.component.sass']
})
export class HablemosComponent implements OnInit {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder)
    { 
    this.signupForm = this._builder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    })
  }

  enviar(values){
    console.log(values)
  }

  ngOnInit() {
  }

}
