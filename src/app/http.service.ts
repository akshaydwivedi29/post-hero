import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts = () => {
    return this.http.get(environment.apiURL.concat('posts'));
  }
  getPostComments = (postId: number) => {
    return this.http.get(environment.apiURL.concat('comments?postId=', postId.toString()));
  }
}
