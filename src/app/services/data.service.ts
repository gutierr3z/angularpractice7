import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Apple } from '../logic/apples';

@Injectable()
export class DataService {

  constructor( private http:Http ) {}

  public endpoint = 'http://localhost:3000';

  getList( callback ) {

    // // http.get returns an observable
    // this.http.get( `${ this.endpoint }/apples` )
    // .subscribe( response => {
    //   // response is the list
    //   console.log( 'response: ', response.json() );
    //   callback( response.json() );
    // });

    const list = [
      new Apple( 'aaaaa aaaaaa', 'aaaaa' ),
      new Apple( 'bbbbb bbbbbb', 'bbbbb' ),
    ];

    callback( list );
  }

  save( apple, callback ) {
    // TODO: change this with real web service
    callback( true );
  }

}
