import {Component, OnInit} from '@angular/core';
import { TicketModel } from '../../shared/ticket-model';
import {TicketService} from '../../shared/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor(private _ticket: TicketService) { }

  ngOnInit() {
    this._ticket.getAllEvents();
  }

}
