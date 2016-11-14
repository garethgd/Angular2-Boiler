import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  currentUser = 'Username';

  setUser(name) {
    this.currentUser = name;
  }
}
