import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../shared/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserModel;
  constructor() { }

  ngOnInit() {
  }

}
