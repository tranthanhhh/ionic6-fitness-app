import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(public authService: AuthenticationService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertBtn',
      header: 'Password Reset',
      message: 'Password Email has been sent, please check your inbox',
      buttons: ['OK']
    });

    await alert.present();
  }
}
