import { CanDeactivate, ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate{
  canDeactivate: () => boolean | Observable<boolean> |  Promise<boolean> 
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{
  canDeactivate(component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
      nextState?:RouterStateSnapshot): boolean | Observable<boolean> |  Promise<boolean> 
    {
      return component.canDeactivate()
    }
  constructor() { }

}
