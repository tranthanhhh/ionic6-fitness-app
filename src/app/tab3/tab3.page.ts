import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private route: Router, public alertController: AlertController, public authService: AuthenticationService) {}

  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertBtn',
      header: 'Log Out Alert',
      message: 'Log Out Successfully',
      buttons: ['OK']
    });

    await alert.present();
  }
}
