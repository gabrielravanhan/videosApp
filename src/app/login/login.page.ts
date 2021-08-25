import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'admin@admin.com' && this.senha === "admin") {
      this.route.navigateByUrl('/tabs/tab1');
      this.mostrarToast('Seja Bem-Vindo!!!', 'azul-escuro')
    } else {
      this.mostrarToast('Erro, usuário e/ou senha inválidos!!!', 'danger')
    }
  }

  async mostrarToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

}
