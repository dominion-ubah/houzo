import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HouzlistService {
public Url= 'https://jsonplaceholder.typicode.com';
  constructor(private _http:HttpClient) {
    
   }
  getHouzData ():Observable<any> {
    let d = this._http.get(this.Url+ '/photos');
    return  d;
  }
}
