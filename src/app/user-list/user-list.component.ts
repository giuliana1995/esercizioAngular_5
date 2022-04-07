import { Component, OnInit } from '@angular/core';
import { Userlist } from '../models/interface-user';
import { OBJUSER } from '../models/object-user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUser: Userlist[] = OBJUSER;

  constructor() { }

  removeItem(index: number) {
    this.listUser.splice(index,1);
  }

  ngOnInit(): void {
  }

}
