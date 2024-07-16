import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';

export interface Post {
  id?: number | any,
  title: string,
  body: string,
  tags?: []
}

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})

export class PhoneComponent implements OnInit {

  posts: Post[] = [];

  selectedIndex: any = null;
  isEdit = false;
  selectedPost: any = null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  postForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required]]
  })

  deleteForm = this.formBuilder.group({
    titleDelete: ['', [Validators.required]]
  })

  ngOnInit() {
    this.loadPosts()
  }


  async loadPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response: any) => {
      this.posts = response;
    })
  }

  async create() {
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.postForm.value).subscribe((data: any) => {
      this.posts.push(data);


    })
  }

  async deletePost(id: number, i: any) {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id).subscribe((response: any) => {
      this.posts.splice(i, 1);
    })
  }
  async editPost(post: any, i: any) {
    this.isEdit = true;
    this.selectedIndex = i,
      this.selectedPost = post;
    this.postForm.patchValue({
      title: post.title,
      body: post.body
    })
  }

  async update() {
    this.http.put('https://jsonplaceholder.typicode.com/posts/' + this.selectedPost.id, this.postForm.value).subscribe((response: any) => {
      this.posts[this.selectedIndex] = response;
      this.postForm.patchValue({
        title: '',
        body: ''
      });
      this.selectedPost = null;
      this.selectedIndex = null;
      this.isEdit = false;
    })
  }

  createAndUpdate() {
    if (this.isEdit) {
      this.update();
    } else {
      this.create();
    }
  }


}
