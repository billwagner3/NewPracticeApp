import { Component, OnInit } from '@angular/core';

import { KeysService } from '../keys.service';

import 'rxjs/Rx';
import * as $ from 'jquery';



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

  anim = 
    { id: '1', name: 'animated bounceInDown' }
  

  getKeyClass(typeKey) {
    
    this.keysService.getAllKeys(typeKey)
    .subscribe(test => {
    this.test = test;
    let isRightKey = document.getElementById("drillKey").innerHTML;
    console.log(test);
    let audioPlayer = <HTMLVideoElement> document.getElementById('correctSound');
    audioPlayer.addEventListener;
    if (test == isRightKey) {
    // audioPlayer.play()
    //   .then(function() {
      //  alert("You got it right!");
      let obj = this.anim;
       $('#log').addClass(this.anim.id = '1').text('You got it right! ' + test);
      //  })
    } else{       
        // let audioPlayer2 = <HTMLVideoElement> document.getElementById('wrongSound');
        // audioPlayer2.play()
        // .then(function() 
        // {
          $('#log').addClass('animated bounceInDown').text('Wrong Answer! ' + test);
        }        
  }   
    )};

  printSpelling()  {
    return this.typeKey;
  }

  ngOnInit() {
  }
}
