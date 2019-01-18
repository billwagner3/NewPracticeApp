import { Component, OnInit } from '@angular/core';

import { KeysService } from '../keys.service';

import 'rxjs/Rx';
import 'console-log-html';
import 'jquery';
import { $ } from 'protractor';


@Component({
  selector: 'app-key-certainty-drill',
  templateUrl: './key-certainty-drill.component.html',
  styleUrls: ['./key-certainty-drill.component.scss']
})
export class KeyCertaintyDrillComponent implements OnInit {

  constructor(private keysService: KeysService) {
  }

  typeKey: string = '';
  dataPassed = false;
  test = '';
  errors = false;
  hasError = false;

  getLogged(callback) {
    console.log(callback);
  }

  getKeyClass(typeKey) {
    
    this.keysService.getAllKeys(typeKey)
    .subscribe(test => {
    this.test = test;
    this.getLogged(test);
    $('#log').getLogged(test);
    
    // console.log(test);
    let isRightKey = document.getElementById("drillKey").innerHTML;
    console.log(test);
    // let write = document.getElementById('dump').innerHTML = console.log('test');
    
    
    let audioPlayer = <HTMLVideoElement> document.getElementById('correctSound');
    audioPlayer.addEventListener;
    if (test == isRightKey) {
    audioPlayer.play()
    .then(function() {
      alert("You got it right!");
      
      })
    } else{       
        let audioPlayer2 = <HTMLVideoElement> document.getElementById('wrongSound');
        audioPlayer2.play()
        .then(function() {
          alert("Incorrect answer, please try again.");
        })        
  }   
} 
    )};

  consoleDump() {
    console.log(this.getKeyClass(this.typeKey))
  }

  printSpelling()  {
    return this.typeKey;
  }

  // loadedFeature = 'drill';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit() {
  }
}
