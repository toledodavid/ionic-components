import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static:false}) lista: IonList;

  usuarios:Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  favorite(user){
    this.presentToast('Guardado en favoritos');
    this.lista.closeSlidingItems();
  }
  share(user){
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }
  borrar(user){
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

}
