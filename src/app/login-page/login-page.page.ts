import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private router: Router, public alertController: AlertController, public authService: AuthenticationService) { }

  ngOnInit() {
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['tabs']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertBtn',
      header: 'Login Alert',
      message: 'Login Successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

}
