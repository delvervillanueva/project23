import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceEmailService } from '../../../../core/service/service-email.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  title = "inmo.devilla";
  loading = false;
  buttionText = "Submit";

  public formLogin: FormGroup;


  constructor( private formBuilder: FormBuilder, public serviceEmailService: ServiceEmailService) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(5)]]

    })
  }

  send():any {
    ///console.log(this.formLogin.value);
    let letCliente = {
      name: this.formLogin.value,
      email:  this.formLogin.value,
      message: this.formLogin.value
    }

    this.serviceEmailService.sendEmail("https://5ixj43c78i.execute-api.us-east-1.amazonaws.com/apinew", letCliente ).subscribe(
      data => {
        let res:any = data;
        console.log(`Respuesta ${letCliente.name}, ${letCliente.email} y ${letCliente.message}`);
      },

      err => {
        console.log(err);
      },() => {
        console.log();
      }
    )
  }


}
