import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  emailId;
  data: object[] = [{emailId: 'a', password: 'asassasas', contactNo: 1121}];
  constructor() { }
  getData() {
    return this.data;
  }
}
