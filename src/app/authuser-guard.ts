import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Userservice } from './userservice';

export const authuserGuard: CanActivateFn = (route, state) => {
  const userservice= inject(Userservice)
  const router= inject(Router)
  if(userservice.authenticated()){
    return true
  }
  router.navigate(['/login'])
  return false
};
