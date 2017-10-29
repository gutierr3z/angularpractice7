import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apple } from '../../logic/apples';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  routingSubscription:any;
  apple:Apple;

  constructor( private route:ActivatedRoute, private router:Router ) { }

  cancel() {
    this.router.navigate([
      '/'
    ]);
  }

  save() {

  }

  ngOnInit() {
    this.apple = new Apple();
    this.routingSubscription = this.route.params.subscribe( params => {
      console.log( params[ 'id' ] );
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}