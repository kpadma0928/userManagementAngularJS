import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {User} from './user'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const baseUrl = 'http://localhost:5000/users/'

@Injectable()
export class UserService {
  
  constructor(private http: Http) { }
  getAllUsers(): Observable<User> {
    return  this.http.get(baseUrl, {headers: this.getHeaders()}).map(res => res.json())
  }

  get(id: Number):Observable<User> {
    return this.http.get(`${baseUrl}${id}`, {headers: this.getHeaders()}).map(res => res.json())
  }

  createUser(user){
    return this.http.post(`${baseUrl}`, user,  {headers: this.getHeaders()}).map(res => res.json())
  }

  updateUser(user){
    return this.http.put(`${baseUrl}${user.id}/edit`, user, {headers: this.getHeaders()})
  }

  deleteUser(userId){
    return this.http.delete(`${baseUrl}${userId}`, {headers: this.getHeaders()} )
  }

  getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers
  }

}
