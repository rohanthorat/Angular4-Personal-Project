import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDix5vzBHEfH-_PD3rONO6svL3cKM-KJGg",
      authDomain: "ng-recipe-book-2ef35.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
