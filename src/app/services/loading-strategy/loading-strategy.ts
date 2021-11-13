import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStrategy implements PreloadingStrategy {

  preload = (route: Route, load: Function): Observable<any> => (route?.data?.preload) ? load() : of(null);

}