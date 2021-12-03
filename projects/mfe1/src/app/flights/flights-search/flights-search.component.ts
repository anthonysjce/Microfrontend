import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSendMessage() {
    const busEvent = new CustomEvent('app-event-bus', {
      bubbles: true,
      detail: {
        eventType: 'auth-register'
      }
    });
    dispatchEvent(busEvent);
  }

}
