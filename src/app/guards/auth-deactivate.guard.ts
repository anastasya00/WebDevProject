import { CanDeactivateFn } from '@angular/router';

export const authDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
