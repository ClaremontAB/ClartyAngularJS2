import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar.component';
import { JumbotronComponent } from './jumbotron.component';
import { ContainerComponent } from './container.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	NavbarComponent,
  	JumbotronComponent,
  	ContainerComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
