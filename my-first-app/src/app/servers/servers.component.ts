import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private _allowNewServer: boolean;
  private _serverCreationStatus: string;
  private _serverName: string;
  ngOnInit() {
    this._allowNewServer = false;
    this._serverCreationStatus = 'No server was created!';
    this._serverName = '';

    setTimeout(() => this._allowNewServer = true, 2000);
  }

  constructor() { }

  onCreateServer() {
    this._serverCreationStatus = 'New server created! Name: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this._serverName = (<HTMLInputElement>event.target).value;
  }

  get allowNewServer(): boolean {
    return this._allowNewServer;
  }

  get serverName(): string {
    return this._serverName;
  }

  set serverName(value: string) {
    this._serverName = value;
  }

  get serverCreationStatus(): string {
    return this._serverCreationStatus;
  }
}
