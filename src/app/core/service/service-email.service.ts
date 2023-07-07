import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceEmailService {

  constructor(private httpClient: HttpClient) { }

  /* private apiKey = ""; */



/*   addEmail(body:any) {
    const url = "https://8xonsv6w1i.execute-api.sa-east-1.amazonaws.com/api";

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient.post(url,body,{headers:headers});
  } */


  sendEmail(url:any, data:any) {
    return this.httpClient.post(url, data);
  }

}
