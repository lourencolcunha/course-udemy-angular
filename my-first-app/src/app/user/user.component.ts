import {Component} from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private _username = '';

  isUsernameEmpty() {
    return null == this._username || this._username === "";
  }

  onResetUsername() {
    this._username = '';
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

}

