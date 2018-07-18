import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'gw-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    user$: Observable<User>;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.user$ = this.authService.getUser();
    }
}
