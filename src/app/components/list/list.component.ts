import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Apple } from '../../logic/apples';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:Apple[];

  constructor( private data:DataService ) { }

  ngOnInit() {
    this.data.getList( list => {
      this.list = list;
    });
  }

}
