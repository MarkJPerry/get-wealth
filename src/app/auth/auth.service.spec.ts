import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { User } from './user';

describe('AuthService', () => {
    let httpMock: HttpTestingController;
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(AuthService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should request data from api', () => {
        const mockUser: User = {
            dob: 'dob',
            email: 'test@Test.com',
            id: '12345',
            name: 'Test'
        };

        service.getUser().subscribe(user => {
            expect(user).toEqual(mockUser);
        });

        const req = httpMock.expectOne(`${AuthService.apiUrl}`);
        req.flush(mockUser);
    });

    it('should cache the response and NOT make a second request', () => {
        const mockUser: User = {
            dob: 'dob',
            email: 'test@Test.com',
            id: '12345',
            name: 'Test'
        };

        service.getUser().subscribe(user => {
            expect(user).toEqual(mockUser);
        });

        const req = httpMock.expectOne(AuthService.apiUrl);
        req.flush(mockUser);

        service.getUser().subscribe(rates => {
            expect(rates).toEqual(mockUser);
        });

        httpMock.expectNone(AuthService.apiUrl);
    });

    it('should make a http request again after cache is cleared', () => {
        const mockUser: User = {
            dob: 'dob',
            email: 'test@Test.com',
            id: '12345',
            name: 'Test'
        };

        service.getUser().subscribe(user => {
            expect(user).toEqual(mockUser);
        });

        const req = httpMock.expectOne(AuthService.apiUrl);
        req.flush(mockUser);

        service.clearCache();

        service.getUser().subscribe(rates => {
            expect(rates).toEqual(mockUser);
        });

        const req2 = httpMock.expectOne(AuthService.apiUrl);
        req2.flush(mockUser);
    });
});
