import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class UserService {

  constructor() { }

 

  currentUser = new BehaviorSubject<string>('Eric');

  setUser(name) {
    this.currentUser.next(name);
  }
}
