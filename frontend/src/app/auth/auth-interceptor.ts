// auth-interceptor.ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router ) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("token");

        // Check if the token exists in local storage
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "JWT " + token)
            });

            return next.handle(cloned).pipe(
                // Catch any error
                catchError((err: HttpErrorResponse) => {
                    // Check if the error is a 401 error (Means the Client is Unauthorized)
                    // This error will be returned by Django
                  if (err.status === 401) {
                    // Handle 401 error
                    localStorage.removeItem('token');
                    localStorage.removeItem('expires_at');
                    this.router.navigate(['login']);
                  } 
                    //   console.log('got a 401')
                    return throwError(err);
                
                })
            )

        }
        else {
            return next.handle(req)
            
        }
    
    }

}