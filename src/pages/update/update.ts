import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class Update {

  isReadyToSave: boolean;

  item: any;

  isAndroid: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public platform: Platform) {
    this.isAndroid = platform.is('android');
    this.item = {
      'taskId': navParams.get('id'),
      'userId': navParams.get('userid'),
        'category': navParams.get('category'),
        'description': navParams.get('description'),
        'correo': navParams.get('correo'),
        'direccion': navParams.get('direccion'),
        'created': navParams.get('created')
    };
    this.isReadyToSave = true;
  }

  ionViewDidLoad() {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() { 
    this.viewCtrl.dismiss(this.item);
  }
}
