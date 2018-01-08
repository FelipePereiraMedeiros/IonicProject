import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {
  private baseAPIPath = "https://api.themoviedb.org/3/";
  private keyAPI = "3dc5fa61ef266b2a0e3c71898cb1e0fd"

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies(){ 
    return this.http.get(this.baseAPIPath + "movie/popular?api_key=" + this.keyAPI );
  }

}
