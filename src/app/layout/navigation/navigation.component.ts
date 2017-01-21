import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../users/user-modal/user.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent {

  constructor() { }

  @Input() whiskeyName: string;

  currentUser: User = new User();
  
  //Listens to onNameChanged  event
  @Output() onNameChanged = new EventEmitter<string>();

  login(username, password) {
    console.log(event);
  }

  searchWhiskey(whiskeyName) {
    this.onNameChanged.emit(whiskeyName)
  }

  setWhiskeyName(newName: string) {
    this.whiskeyName = newName
  }

  incrementAge(){
    this.currentUser.age ++;
  }
}
