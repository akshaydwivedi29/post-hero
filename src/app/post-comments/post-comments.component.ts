import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { HttpService } from '../http.service';
@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  private postId: number;
  comments: any;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.postId = + params.get('id');
        return this.httpService.getPostComments(this.postId);
      })
    ).subscribe(comments => {
      this.comments = comments;
    });
  }

}

