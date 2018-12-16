import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
