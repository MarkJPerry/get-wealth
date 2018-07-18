import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    static readonly apiUrl = 'http://localhost:3000/user';

    private cache$: Observable<User>;

    constructor(private httpClient: HttpClient) { }

    getUser(): Observable<User> {
        if (!this.cache$) {
            this.cache$ = this.requestUser().pipe(shareReplay(1));
        }
        return this.cache$;
    }

    clearCache() {
        this.cache$ = null;
    }

    private requestUser(): Observable<User> {
        return this.httpClient.get<User>(AuthService.apiUrl);
    }
}
