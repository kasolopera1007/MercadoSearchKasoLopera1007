import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavParams, NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  dato:string = "";
  results: any[] = [];

  constructor(
    public navParams: NavParams,
    public UserServiceProvider: UserServiceProvider,
    public navCtrl: NavController) {
    }

    buscar(dato:string){
    this.UserServiceProvider.getProduct(dato)
    .then(data => {
      this.results = data.results;
    })
    .catch(error =>{
      console.error(error);
    })
  }

}
