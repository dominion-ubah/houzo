import { Component, OnInit } from '@angular/core';
import { HouzlistService } from '../shared/houzlist.service';
import { forEach } from '@angular/router/src/utils/collection';

declare var Chance: any; // for externals librairies
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = []
  array = [];
  adder = 6;
  initVal:number;
  throttle = 100;
  scrollDistance = 1;
  // scrollUpDistance = 2;
  direction = '';
  // chance: any;

  constructor(private _houzService:HouzlistService) {
    // this.chance  = new Chance();
    // this.appendItems(0, this.sum);
    this.determI();
  }


  ngOnInit() {
    this._houzService.getHouzData().subscribe(data => {
      this.data = data.slice(0, 20);
      console.log('list', this.array);
      
    },
    error => {
      console.error(error);
    },
    ()=> {
      console.log('doe');
      this.initVal = 6;
      if(this.array.length == 0) {
        this.determI();
        console.log("ran it", this.initVal, this.adder)
      }
    })
  }

determI(){
  let finalVal = this.initVal + this.adder;
  this.popul(finalVal, this.data);
  this.initVal = finalVal; 

}
popul(finalVal, arr){
  arr.forEach((e, i) => {
    if(i <= finalVal){
      if(finalVal < arr.length) {
        this.array.push(e);
        console.log('fi', finalVal)
        return this.array;
      }      
    }
  })
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);
    this.determI();    
    this.direction = 'down'
  }
  
  // onUp(ev) {
  //   this.direction = 'up';
  // }
  
}