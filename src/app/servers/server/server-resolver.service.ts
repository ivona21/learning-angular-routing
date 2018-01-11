import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Server } from "./server.model";
import { ServersService } from "../servers.service";

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversServices: ServersService) { };
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        const id = route.params["id"] ? Number(route.params["id"]) : 1;
        return this.serversServices.getServer(id);
    }
}