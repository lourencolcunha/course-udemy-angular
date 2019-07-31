import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.css']
})
export class LogMessageComponent implements OnInit {
  @Input() timestamp: Date;
  @Input() index: number;
  constructor() { }
  ngOnInit() { }

  isDiffBackground() {
    return this.index + 1 >= 5;
  }
}
