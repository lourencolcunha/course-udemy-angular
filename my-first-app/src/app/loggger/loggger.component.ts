import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggger',
  templateUrl: './loggger.component.html',
  styleUrls: ['./loggger.component.css']
})
export class LogggerComponent implements OnInit {
  get showDetails(): boolean {
    return this._showDetails;
  }
  private _showDetails: boolean;
  entries: any[];

  constructor() { }

  ngOnInit() {
    this._showDetails = false;
    this.entries = []n
  }

  toggleDetails() {
    this._showDetails = !this._showDetails;

    this.entries.push(new Date());
    console.log(this.entries);
  }
}
