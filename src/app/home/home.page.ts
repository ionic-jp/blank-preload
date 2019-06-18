import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ionViewWillEnter() {
    const preloadArea: HTMLElement = document.getElementById('preload');
    preloadArea.appendChild(document.createElement('ion-card'));
    preloadArea.appendChild(document.createElement('ion-card-header'));
    preloadArea.appendChild(document.createElement('ion-card-subtitle'));
    preloadArea.appendChild(document.createElement('ion-card-title'));
    preloadArea.appendChild(document.createElement('ion-card-content'));
    preloadArea.appendChild(document.createElement('ion-back-button'));
  }
}
