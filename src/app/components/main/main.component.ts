import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people:string[];
  title:string = 'This is my Title';
  isRed:boolean = true;

  constructor( private dataService:DataService ) { }

  ngOnInit() {
    this.people = this.dataService.people;
  }

}
