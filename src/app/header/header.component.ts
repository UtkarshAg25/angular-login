import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myclass: any = 'a';
  @Input() userName: any = '';

  constructor() {}

  ngOnInit(): void {}
  addItem(event: any) {
    this.myclass = event;
    console.log(event);
  }
}
