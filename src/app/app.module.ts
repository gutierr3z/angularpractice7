import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { AppleComponent } from './components/apple/apple.component';
import { ListComponent } from './components/list/list.component';

import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path: '', component: ListComponent },
  { path: 'apple', component: AppleComponent },
  { path: 'apple/:id', component: AppleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot( routes ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
