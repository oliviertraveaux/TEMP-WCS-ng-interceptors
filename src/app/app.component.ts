import {Component, inject, OnInit} from '@angular/core';
import {HttpServiceService} from "./Service/http-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private httpService = inject(HttpServiceService);

  ngOnInit() {
    return this.httpService.getPhotos().subscribe();
  }
}
