import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { WelcomeComponent } from './welcome.component';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app-routing.module';
import { PortfoliosListComponent } from '../portfolios-list/portfolios-list.component';
import { User } from '../auth/user';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let authService: any;

    beforeEach(async(() => {

        const mockService = jasmine.createSpyObj(['getUser', 'clearCache']);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(appRoutes)],
            declarations: [WelcomeComponent, PortfoliosListComponent],
            providers: [
                {
                    provide: AuthService,
                    useValue: mockService
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        authService = TestBed.get(AuthService);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call the auth service to get the user', () => {
        fixture.detectChanges();
        expect(authService.getUser).toHaveBeenCalled();
    });

    it('should display the name of the user', async(() => {
        const mockUser: User = {
            dob: 'dob',
            email: 'test@Test.com',
            id: '12345',
            name: 'Test'
        };

        authService.getUser.and.returnValue(of(mockUser));
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const h2 = fixture.debugElement.query(By.css('h2'));
            expect(h2.nativeElement.textContent).toEqual('Hi ' + mockUser.name);
        });
    }));

    it('should navigate the user when clicking on the view portfolios button', async(inject([Router, Location], (router: Router, location: Location) => {
        fixture.detectChanges();

        const viewLink = fixture.debugElement.query(By.css('a'));
        viewLink.nativeElement.click();

        fixture.whenStable().then(() => {
            expect(location.path()).toEqual('/portfolios');
        });

    })));
});