import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Apple } from '../logic/apples';

@Injectable()
export class DataService {

  constructor( private http:Http ) {}

  public endpoint = 'http://localhost:3000';

  // ------------------------------
  get( appleId:string, callback ) {
    this.http.get( `${ this.endpoint }/apples/${ appleId }` )
      .subscribe( response => {
        callback( response.json() );
      })
  }
  // ------------------------------
  getList( callback ) {

    // http.get returns an observable
    this.http.get( `${ this.endpoint }/apples` )
    .subscribe( response => {
      // response is the list
      console.log( 'response: ', response.json() );
      callback( response.json() );
    });

    // const list = [
    //   new Apple( 'aaaaa aaaaaa', 'aaaaa' ),
    //   new Apple( 'bbbbb bbbbbb', 'bbbbb' ),
    // ];

    // callback( list );
  }
  // ------------------------------
  save( apple, callback ) {
    // TODO: change this with real web service
    if( apple._id ) {
      // its an update
      this.http.put( `${this.endpoint}/apples/${apple._id}`, apple )
        .subscribe( response => {
          callback( true );
        });
    } else {
      // its an insert
      this.http.post( `${this.endpoint}/apples`, apple )
      .subscribe( response => {
        callback( true );
      });
    }
  }
  // ------------------------------
}
