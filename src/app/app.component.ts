import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Service from './config.server';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'suplias-demo';
  public buyer = {};
  public product = {};
  public order = {};
  public orderItem = {};
  public weekly = {};
  public weeklyItem = {};

  constructor(private dataService: Service) {
    this.getBuyers();
    this.getProducts();
    this.getOrders();
    this.getOrderItems();
    this.getWeekly();
    this.getWeeklyItems();
  }

  getBuyers() {
    this.dataService.getBuyers().subscribe((res: any) => {
      if (res.code === 200) {
        this.buyer = res.data;
      }
    });
  }

  getOrders() {
    this.dataService.getOrders().subscribe((res: any) => {
      if (res.code === 200) {
        this.order = res.data;
      }
    });
  }

  getOrderItems() {
    this.dataService.getOrderItems().subscribe((res: any) => {
      if (res.code === 200) {
        this.orderItem = res.data;
      }
    });
  }

  getProducts() {
    this.dataService.getOrderProducts().subscribe((res: any) => {
      if (res.code === 200) {
        this.product = res.data;
      }
    });
  }

  getWeekly() {
    this.dataService.getWeekly().subscribe((res: any) => {
      if (res.code === 200) {
        this.weekly = res.data;
      }
    });
  }

  getWeeklyItems() {
    this.dataService.getWeeklyItems().subscribe((res: any) => {
      if (res.code === 200) {
        this.weeklyItem = res.data;
      }
    });
  }
}
