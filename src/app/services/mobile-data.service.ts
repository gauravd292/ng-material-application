import { Injectable } from '@angular/core';
import { MOBILE_LIST } from '../DB';

import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class MobileDataService {
  constructor(private http: Http) {}

  getAllData() {
    // return this.http.get("../../assets/api/mobile-data.json").

    return MOBILE_LIST;
  }
}
