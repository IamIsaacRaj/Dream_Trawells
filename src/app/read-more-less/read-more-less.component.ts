import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more-less',
  templateUrl: './read-more-less.component.html',
  styleUrls: ['./read-more-less.component.css']
})
export class ReadMoreLessComponent implements OnInit {


    expand: boolean = false;
    anchor: string = 'Read more';
  
    constructor() {}
  
    ngOnInit() {}
  
    toggle() {
      this.expand = !this.expand;
      this.anchor = this.expand ? 'Show less' : 'Read more';

  }
  

}
