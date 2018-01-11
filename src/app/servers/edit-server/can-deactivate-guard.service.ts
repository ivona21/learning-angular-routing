import { CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { EditServerComponent } from "./edit-server.component";

// export interface CanComponentDeactivate {
//     canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
// }

export class CanDeactivateGuard implements CanDeactivate<EditServerComponent> {
    canDeactivate(component: EditServerComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}