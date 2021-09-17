import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'OLÁ, NENÉNS!!!',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'OLÁ, NENÉNS!!!',
      duration: 2000,
      color: 'azul-escuro'
    });
    toast.present();
  }

}
