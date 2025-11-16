import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  settingsEnabled = false;

  toggleSetting() {
    this.settingsEnabled = !this.settingsEnabled;
  }


}
