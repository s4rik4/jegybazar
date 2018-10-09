export class TicketModel {
  id: number;
  name: string;
  date: string;
  seller: string;
  amount: number;
  ticketURL: string;

  // new EventModel
  constructor(param?: TicketModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
