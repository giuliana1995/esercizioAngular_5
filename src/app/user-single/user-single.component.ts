import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Userlist } from '../models/interface-user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  
  @Input() index!: number;
  @Input() listUser!: Userlist;
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor() { }

  removeItem(item: number) {
    this.remove.emit(item);
  }

  ngOnInit(): void {
  }

}
