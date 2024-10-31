import { Component } from '@angular/core';
import { Store } from '../../modules/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  clientName: string;
  store: Store;

  constructor() {
    this.clientName = "Hady";
    this.store = new Store("H&M", ["Cairo", "Alex", "Banha"], "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg")
  }
}
