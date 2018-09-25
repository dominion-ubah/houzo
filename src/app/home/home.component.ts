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
  togglelike:boolean;
  data = []
  array = [];
  initVal:number;
  throttle = 100;
  scrollDistance = 1;
  // scrollUpDistance = 2;
  direction = '';
  // chance: any;

  constructor(private _houzService:HouzlistService) {
    // this.chance  = new Chance();
    // this.appendItems(0, this.sum);
    this.determI(6);
  }


  ngOnInit() {
    this._houzService.getHouzData().subscribe(data => {
      this.data = data.slice(0, 240);
      console.log('list', this.data, this.array);
      
    },
    error => {
      console.error(error);
    },
    ()=> {
      console.log('doe');
      this.initVal = 6;
      if(this.array.length == 0) {
        this.determI(6);
        console.log("ran it", this.initVal)
      }
    })
  }
  togglelikeactio(i , e){
    console.log(i, e)
    if (this.togglelike) {
      this.togglelike = false
    }else {
      this.togglelike = true;
    }
  }
determI(adder){
  let finalVal = this.initVal + adder;
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
    this.determI(6);    
    this.direction = 'down';

  }

  onType (ev) {
    console.log('typed', ev);
    if(this.array.length==0) {
      console.log('hehe',this.array)
      this.determI(120); 
    }
       
    this.direction = 'down';
    
  }

  parseAlbToLoc(alb) {
    let loc = '';
    switch (alb ) {
      case 1 :
      loc = 'Lagos';
      break;
      case 2 :
      loc = 'Ogun';
      break;
      case 3 :
      loc = 'Oyo' ;
      break;
      case 4 :
      loc = 'PH';
      break;
      case 5 :
      loc = 'Abuja';
      break;
    default:
        loc = '';
    }
    return loc
    
  }

  parseColor(alb) {
    let loc = '';
    switch (alb ) {
      case 1 :
      loc = 'danger';
      break;
      case 2 :
      loc = 'info';
      break;
      case 3 :
      loc = 'warning' ;
      break;
    default:
        loc = 'success';
    }
    return loc
    
  }
  
  // onUp(ev) {
  //   this.direction = 'up';
  // }
  
}