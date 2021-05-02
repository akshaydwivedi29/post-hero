import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Object;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getPosts().subscribe(postList => {
      this.posts = postList;
    });
  }

}
