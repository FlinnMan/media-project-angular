import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Userservice } from './userservice';

export const loginGuard: CanActivateFn = (route, state) => {
  const userservice = inject(Userservice);
  const router = inject(Router);

  if (userservice.authenticated()) {
    router.navigate(['/posts']);
    return false;
  }
  return true;
};