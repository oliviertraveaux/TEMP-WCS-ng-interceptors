import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dateOfReq: number = new Date().getTime();
    console.log('URL de la requête : ', req.url)
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          const delay = new Date().getTime() - dateOfReq;
          console.log('Délai de la réponse : ' + delay + ' ms');
          console.log('Réponse de l\'API :', event.body);
        }
      })
    );
  }
}
