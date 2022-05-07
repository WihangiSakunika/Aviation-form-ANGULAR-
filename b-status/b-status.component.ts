import { Component, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-b-status',
  templateUrl: './b-status.component.html',
  styleUrls: ['./b-status.component.css']
})
export class BStatusComponent implements OnInit {

  myObservable :Observable<any> = new Observable((observer) =>{
    console.log('Observable starts');

    setTimeout(() => {observer.next(1) },1000 );
    setTimeout(() => {observer.next(2) },2000 );
    setTimeout(() => {observer.next(3) },3000 );
    setTimeout(() => {observer.next(4) },4000 );
    setTimeout(() => {observer.next(5) },5000 );
    setTimeout(() => {observer.next(6) },6000 );
    setTimeout(() => {observer.complete() },7000 );//complete
  }).pipe(
    filter((data:any)=>{
      return data>2
    }),
    map((data:any)=>{
      return data *3
    })
  );
  subscription! : Subscription;
  registrationStatus!:any;
  registrationStatusObs !: Observable<any>;

  constructor() { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.myObservable.subscribe(
      val=>{
        console.log(val)
      },
      error =>{
        console.log('Error occurred');
      },
      );
      this.intregistrationStatusObs();
      
  }
  intregistrationStatusObs(){
    this. registrationStatusObs=new Observable(Observer =>{
      setTimeout(() => {
        Observer.next("registration progress...") 
      },2000 );
      setTimeout(() => {
        Observer.next("progressing....") 
      },4000 );
      setTimeout(() => {
        Observer.next("your are registered !!!") 
      },6000 );
    });

    this.subscription = this. registrationStatusObs.subscribe(value =>{
      this. registrationStatus= value;
    });
  }

}
