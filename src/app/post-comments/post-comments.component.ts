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
  rawComments;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.postId = + params.get('id');
        return this.httpService.getPostComments(this.postId);
      })
    ).subscribe(comments => {
      this.comments = comments;
      this.rawComments = this.comments;
    });
  }
  doSearch(event) {
    const searchTerm: string = event.target.value.trim().toUpperCase();
    if (searchTerm.length < 3) {
      this.comments = this.rawComments;
      return false;
    }
    this.comments = this.rawComments.filter(
      item => (item.name.toUpperCase() == searchTerm || item.email.toUpperCase() == searchTerm || item.body.includes(searchTerm))
    );
    if (this.comments.length < 1) {
      this.comments = this.rawComments;
    }
  }
}

