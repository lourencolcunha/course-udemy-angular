import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online { color: white }`]
})
export class ServerComponent implements OnInit {
  serverId: number;
  serverStatus: string;
  allowNewServer: boolean;

  constructor() {
    this.serverId = Math.random();
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';

    this.allowNewServer = false;
  }

  ngOnInit() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
