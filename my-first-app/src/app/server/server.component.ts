import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serverId: number;
  serverStatus: string;
  allowNewServer: boolean;

  ngOnInit() {
    this.allowNewServer = false;
    this.serverId = 10;
    this.serverStatus = 'offline';

    setTimeout(() => this.allowNewServer = true, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
