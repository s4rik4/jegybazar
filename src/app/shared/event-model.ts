export class EventModel {
  id?: number;
  name: string;
  date: string; //na ezt azert productionban szebben kéne
  pictureURL: string;
  description: string;

  // new EventModel
  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static get emptyEvent() {
    return {
      'name': '',
      'date': '',
      'pictureURL': '',
      'description': ''
    };
  }

}

