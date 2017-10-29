import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apple } from '../../logic/apples';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  routingSubscription:any;
  apple:Apple;

  constructor( 
    private route:ActivatedRoute, 
    private router:Router,
    private data:DataService
  ) { }

  cancel() {
    this.router.navigate([
      '/'
    ]);
  }

  save() {
    this.data.save( this.apple, result => {
      if( result ) {
        this.router.navigate([
          '/'
        ]);
      }
    });
  }

  ngOnInit() {
    this.apple = new Apple();
    this.routingSubscription = this.route.params.subscribe( params => {
      console.log( params[ 'id' ] );
      if( params['id'] ) {
        this.data.get( params['id'], response => {
          this.apple = response;
        });
      }
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}