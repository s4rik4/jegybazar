import {Injectable} from '@angular/core';
import {TicketModel} from './ticket-model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private _tickets: TicketModel[];

  constructor() {
    this._tickets = [
      {
        'id': 1,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 2,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 3,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 4,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 5,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 6,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 7,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 8,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      },
      {
        'id': 9,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'seller': 'Példa Jóska',
        'amount': 3,
        'ticketURL': './ticket/bid/:id/bid'
      }
    ];
  }

  getAllEvents(): TicketModel[] {
    return this._tickets;
  }
}
