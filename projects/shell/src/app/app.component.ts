import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shell';
  $eventBus: Subscription | undefined;
  
  ngOnInit(){
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e) => this.onEventHandler(e));
  }
  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'auth-register') {
     console.log("hello");
    }
  }
}
