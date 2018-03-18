import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
@Injectable()
export class MyservicesService {
  apiURL = "https://jsonplaceholder.typicode.com";
  constructor(private http: Http) { }



//Function to get all the users with api
  getUsers() {
   // const headers = new Headers();
       
      return this.http.get(this.apiURL+"/users");
  }


  //Function to get users by user id with api
  getUsersbyid(id:any) {
    // const headers = new Headers();
        
       return this.http.get(this.apiURL+"/users/?id="+id);
   }

   //Function to get album name by user id
   getalbum_namebyid(id:any) {
    // const headers = new Headers();
        
       return this.http.get(this.apiURL+"/albums/?id="+id);
   }

   //Function to get albums list by user id with api
  getAlbumsbyuserid(id:any) {
    // const headers = new Headers();
        console.log(id);
       return this.http.get(this.apiURL+"/albums/?userId="+id);
   }


//Function to get photos by album id with api
   getphotosbyalbumid(id:any) {
    // const headers = new Headers();
        console.log(id);
       return this.http.get(this.apiURL+"/photos/?albumId="+id);
   }
}


