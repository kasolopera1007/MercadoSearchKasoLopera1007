import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserServiceProvider {

  Api:any = "https://api.mercadolibre.com/sites/MCO/"

  constructor(public http: Http) {

  }

  getProduct(data:string) {
    var link:string = this.Api + "search?q=" + data
	  return this.http.get(link)
	  .map(res => res.json())
	  .toPromise();
	}


}