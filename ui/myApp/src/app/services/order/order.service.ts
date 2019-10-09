import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config'
import { Order } from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

constructor(private http: HttpClient) { }

getOrders() {
  return this.http.get<Order[]>(`${Config.url}/orders`);
 }
}
