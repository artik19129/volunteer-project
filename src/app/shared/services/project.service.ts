import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public isAuth = false;

  constructor() {
    this.isAuth = false;
  }
}
