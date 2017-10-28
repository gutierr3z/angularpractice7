import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  routingSubscription:any;

  constructor( private route:ActivatedRoute ) { }

  ngOnInit() {

    this.routingSubscription = this.route.params.subscribe( params => {
      console.log( params[ 'id' ] );
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
