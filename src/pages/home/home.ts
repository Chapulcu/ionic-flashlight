import { Platform } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isOn:boolean;

  constructor(
    private flashlight:Flashlight, 
    private platform: Platform 
  ) {

    this.platform.ready().then(()=>{
      this.updateFlashlightStatus();
    });

  }
  switchOn(){

    this.flashlight.switchOn();
    
  }

  switchOff(){
    this.flashlight.switchOff();
    this.isOn = this.flashlight.isSwitchedOn();
  }

  toggle(){
    this.flashlight.toggle();
    this.isOn = this.flashlight.isSwitchedOn();
  }
  
  updateFlashlightStatus(){
   this.isOn = this.flashlight.isSwitchedOn();
  }


}
