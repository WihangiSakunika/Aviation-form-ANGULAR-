import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businees-form',
  templateUrl: './businees-form.component.html',
  styleUrls: ['./businees-form.component.css']
})
export class BusineesFormComponent implements OnInit {

  busineesform!:FormGroup;
  submitted=false;
  
  get f() { return this.busineesform.controls; }
  constructor(
    private formBuilder:FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.busineesform=this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required,Validators.maxLength(6)],
      email:['', Validators.required,Validators.email],
      fax:['', Validators.required],
      Nationality:['', Validators.required],
      country:['', Validators.required],
      nic:['', Validators.required,Validators.minLength(10)],
      Passport:['', Validators.required,Validators.minLength(10)],
      acceptTerms: [false, Validators.requiredTrue],
    })
  }
  onSubmit(){
    this.submitted=true;
    setTimeout(() => {
      console.log('Response');    
      this.submitted = false; 
      this.router.navigate(['/bstatus'])   
    }, 6000);
    if(this.busineesform.invalid){
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.busineesform.value, null, 4))
  }
  onReset(){
    this.submitted=false;
    this.busineesform.reset();
  }
}
