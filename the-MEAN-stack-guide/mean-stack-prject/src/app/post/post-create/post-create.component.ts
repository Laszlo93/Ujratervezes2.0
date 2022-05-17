import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  public enteredValue = '';
  public newPost = 'NO CONTENT';

  public onAddPost() {
    this.newPost = this.enteredValue;
  }
}
