import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class Service {
  constructor(private http: HttpClient) { }
  baseURL = 'assets/data';

  getBuyers() {
    return this.http.get(`${this.baseURL}/buyer.json`);
  }

  getOrders() {
    return this.http.get(`${this.baseURL}/order.json`);
  }

  getOrderItems() {
    return this.http.get(`${this.baseURL}/order_item.json`);
  }

  getOrderProducts() {
    return this.http.get(`${this.baseURL}/product.json`);
  }

  getWeekly() {
    return this.http.get(`${this.baseURL}/weekly.json`);
  }

  getWeeklyItems() {
    return this.http.get(`${this.baseURL}/weekly_item.json`);
  }
}
