import {inject, Injectable} from '@angular/core';
import {Photo} from "../Model/Photo";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private http = inject(HttpClient)


  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
  }

}
