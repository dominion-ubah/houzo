import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouzlistService } from '../shared/houzlist.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
public data;
  constructor(private _routeA: ActivatedRoute,
              private _housServ: HouzlistService) { }

  ngOnInit() {
    this._routeA.params.subscribe(d => {
      console.log(d.id)
      this._housServ.getHouzData().subscribe(data => {
        this.data = data.filter(e => (e.id == d.id))[0]
        console.log('lol', this.data)
      })

    })
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
}
