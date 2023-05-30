import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

   Url: string = "http://localhost:3000/blogs"

    constructor(private http: HttpClient) { }
  getBlog() {
    return this.http.get<Blog[]>(this.Url)
  }

}
