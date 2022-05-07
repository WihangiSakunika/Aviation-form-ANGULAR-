import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  AviationForm !:FormGroup;
  isSubmitted :boolean=false;
  isLoading :boolean=false;
  isClear:boolean=false;
  BloodGroup : any=['O+', 'O','-A','+A','-B','+B','-AB','+AB'];
  Eyevision :any=['Spectacles','Non Spectacles'];
  get f(){return this.AviationForm.controls;}

  constructor(
    private formBuilder:FormBuilder, 
    private router: Router
  ) { }
  ngOnInit(): void {
    this.initFrom();
  }

  initFrom():void{
    this.AviationForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      Bloodgroup:['',[Validators.required]],
      Eyevision:['',[Validators.required]],
      DOB:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      contactNo:['',[Validators.required,Validators.maxLength(9)]],
      PermentAddress:['',[Validators.required,Validators.maxLength(100)]],
      TemportyAddress:['',[Validators.required,Validators.maxLength(100)]],
      Checkme:[false,Validators.requiredTrue]

    })
  }
  changeBlooGroup(e:any){
    this.AviationForm.controls.Bloodgroup.setValue(e.target.value);
  }
  changeEyevison(e:any){
    this.AviationForm.controls.Eyevision.setValue(e.target.value);
  }
  onsubmit():void{
    console.log(this.AviationForm);
    this.isSubmitted = true;
    if(!this.AviationForm.valid){
      false;
    }
    else{
      console.log(JSON.stringify(this.AviationForm.value));
    }
    if(this.AviationForm.invalid){
      return;
    }
    // this.router.navigate(['/businees-form']) 
    //Checkme error
    if(this.AviationForm.invalid){
      return
    }
    //displya allert
    alert('succe !! :-)\n\n'+JSON.stringify(this.AviationForm.value,null,4));
    if (this. AviationForm.valid) {
      console.log(this. AviationForm.value);
      console.log(this. AviationForm.controls);
  
// pass data into service
      this.isLoading = true;
      setTimeout(() => {
        console.log('Response');    
        this.isLoading = false; 
        this.router.navigate(['/businees-form'])   
      }, 3000);
    } 
    }
    clearForm(): void {
      this.isSubmitted = false;
      this. AviationForm.reset();
      setTimeout(() => {
        console.log('Response');
        this.isClear = false;
  
      }, 2000);
      this. AviationForm.reset();
    }
    OnReset(){
      this.isSubmitted=false;
      this.AviationForm.reset();
    }
}

