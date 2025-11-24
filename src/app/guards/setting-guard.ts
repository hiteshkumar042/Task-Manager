import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/authservice/authservice';

export const settingGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  if (authService.settingsEnabled) {
    return true;
  }
  else {
    alert("No Permission \nPlease Turn on the setting...")
    return false;
  }
};
