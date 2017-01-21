import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/user-modal/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  user = this.userService.currentUser;


  changeUser(newUser) {
    this.userService.setUser(newUser)
  }
  ngOnInit() {
  }

}
