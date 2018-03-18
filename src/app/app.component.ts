import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {  Http, Response, Headers } from '@angular/http';
import { MyservicesService } from './myservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
 // users: any[] = [];
  users = [];
  albums = [];
  photos = [];
  name : string = '';
  album : string = '';
  userid : any;
  userstate : boolean=false; //To show users list and hide other views
  albumstate : boolean=false; //To show album list and hide other views
  photostate : boolean=false; //To show photos list and hide other views
  constructor(private db:MyservicesService, private http: Http){



  }

  //Function to get all the users and display the users list
  getusers(){
    this.db.getUsers().subscribe(
      (response: Response) => { 
        this.users = response.json();
        this.userstate = true;
        this.albumstate = false;
        this.photostate = false;
        console.log(this.users);
      } ,
      (error) => {console.log(error);}
  );
  }


  //Function to get users by user id
  getusersbyid(id:any){
    this.db.getUsersbyid(id).subscribe(
      (response: Response) => { 
        this.name = response.json()[0].name;
        this.userid = id;
       // console.log(name[0].name);
        this.userstate = false;
        this.albumstate = true;
        this.photostate = false;
      } ,
      (error) => {console.log(error);}
  );
  }

  //Function to get album name by album id
  getalbum_namebyid(id:any){
    this.db.getalbum_namebyid(id).subscribe(
      (response: Response) => { 
        this.album = response.json()[0].title;
        console.log(response.json()[0].title);
       
      } ,
      (error) => {console.log(error);}
  );
  }

  //Function to get all the albums list by the user id
  getAlbumsbyuserid(id:any){
    this.db.getAlbumsbyuserid(id).subscribe(
      (response: Response) => { 
        this.albums = response.json();
        console.log(this.albums);
        this.getusersbyid(id);
        this.userstate = false;
        this.albumstate = true;
        this.photostate = false;
      } ,
      (error) => {console.log(error);}
  );
  }

  //Functions to get photos by album id
  getphotosbyalbumid(id:any){
    this.db.getphotosbyalbumid(id).subscribe(
      (response: Response) => { 
        this.photos = response.json();
        console.log(this.photos);
        this.getalbum_namebyid(id);
        
//this.getusersbyid(id);
        this.userstate = false;
        this.albumstate = false;
        this.photostate = true;
      } ,
      (error) => {console.log(error);}
  );
  }

//Display all the users on page load
  ngOnInit(){
    this.getusers()
  }
}
