import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoadingComponent } from './loading.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ LoadingComponent ],
  bootstrap:    [ LoadingComponent ]
})
export class LoadingModule { }
