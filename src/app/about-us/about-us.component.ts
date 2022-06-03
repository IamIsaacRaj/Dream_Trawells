
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  data:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa."
  @Input() isReadMore: boolean = false;
  public isCollapsed: boolean = true;
  ngOnInit() { 
    this.checkDataLength(this.data);
  }
  
  checkDataLength(data:string) {
    console.log('string-length', data.length);
    
    this.isReadMore = (data.length > 60);
  }

}
