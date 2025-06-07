import { inject, Injectable } from "@angular/core";
import { Auth, authState, User } from "@angular/fire/auth";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync } from "@angular/router";
import { BehaviorSubject, filter, map } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {
    auth = inject(Auth);
    private userSubject = new BehaviorSubject<User | null>(null);
    user$ = this.userSubject.asObservable();
    constructor() {
        authState(this.auth).subscribe(user => {
            this.userSubject.next(user);
        });
    }
    User$ = authState(this.auth).pipe(
        filter((user): user is User => user != null),
        map(user => user)
    );

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):MaybeAsync<User> {
        return this.User$;
    }
}