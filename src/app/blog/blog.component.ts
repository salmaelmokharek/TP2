import { Blog } from './../blog';
import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogs: Blog[] = []


  // showDetails(event: any) {
  //   event.preventDefault();
  //   const target = event.target || event.srcElement || event.currentTarget;
  //   const details = target.parentElement.querySelector('.details');
  //   details.style.display = details.style.display === 'none' ? 'block' : 'none';
  // }

  constructor(private blogService: BlogService) {}

  ngOnInit(): void{
    this.blogService.getBlog().subscribe((response) => this.blogs = response)


  }
 


}
