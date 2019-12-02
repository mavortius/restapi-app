import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful API Using Angular';
  users: User[];

  constructor(private service: UserService) {
  }

  ngOnInit() {
    return this.service.getUsers().subscribe(data => this.users = data);
  }
}
