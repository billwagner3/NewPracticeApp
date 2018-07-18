import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KeysService {

  result: any

  constructor(private _http: HttpClient) {}
  
  getKeys(typeKey) {  
      typeKey = typeKey.replace('#', '%23')   
    return this._http.get(`api/keys/${typeKey.toUpperCase()}`).do(console.log)
          .map(result => _.values(result));
      }

  getScale(typeKey) {
    let thisScale = '#';
    let sharpScale = new RegExp(thisScale, 'g');
    typeKey = typeKey.replace(sharpScale, '%23')
    return this._http.get(`api/majorkeys/${typeKey.toUpperCase()}`).do(console.log)
    .map(result => _.values(result));
  }

  getMinorScale(typeKey) {
    let thisScale = '#';
    let sharpMinorScale = new RegExp(thisScale, 'g');
    typeKey = typeKey.replace(sharpMinorScale, '%23')
    return this._http.get(`api/minorkeys/${typeKey}`).do(console.log)
    .map(result => _.values(result));
  }
}