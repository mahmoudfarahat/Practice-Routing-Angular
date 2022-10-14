import { ServersService } from './../servers.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

interface Server {
  id :number;
  name: string;
  status: string
}
@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {
  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Server> | Promise<Server> | Server{
    return this.serversService.getServer(+route.params['id'])
  }
  constructor(private serversService:ServersService) { }
}
