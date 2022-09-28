import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reuse-button',
  templateUrl: './reuse-button.component.html',
  styleUrls: ['./reuse-button.component.css'],
})
export class ReuseButtonComponent implements OnInit {
  @Input() text: string;
  @Input() btnClass: string;
  @Output() onClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  emitEvent() {
    debugger;
    this.onClick.emit('test');
  }
}
