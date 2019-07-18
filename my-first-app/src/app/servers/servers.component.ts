import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  get servers(): any[] {
    return this._servers;
  }
  get serverCreated(): boolean {
    return this._serverCreated;
  }

  set serverCreated(value: boolean) {
    this._serverCreated = value;
  }
  private _allowNewServer: boolean;
  private _serverCreationStatus: string;
  private _serverName: string;
  private _serverCreated = false;
  private _servers = [];
  ngOnInit() {
    this._allowNewServer = false;
    this._serverCreationStatus = 'No server was created!';
    this._serverName = '';

    setTimeout(() => this._allowNewServer = true, 2000);
  }

  constructor() { }

  onCreateServer() {
    this._serverCreationStatus = 'New server created! Name: ' + this.serverName;
    this._servers.push(this.serverName);
    this._serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this._serverName = (event.target as HTMLInputElement).value;
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
