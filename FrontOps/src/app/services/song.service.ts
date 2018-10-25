import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private mainUrl: string = 'http://localhost:8080/';
  private url:string;
  private httpParams: HttpParams;
  private body: any;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    this.url=this.mainUrl+"all";
    return this.accessServer();
  }


  private accessServer(): Observable<any[]> {
    let httpHeaders : HttpHeaders = new HttpHeaders();
    let result : Observable<any[]>;

    httpHeaders.set('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');

    if(this.body==null || this.body==undefined){
      result= this.httpClient.get<any[]>(this.url,{headers:httpHeaders,params:this.httpParams});
    }else{
      result= this.httpClient.post<any[]>(this.url,this.body,{headers:httpHeaders,params:this.httpParams});
    }

    this.body=null;
    
    return result;
  }


}
