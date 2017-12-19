import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SDTask } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginComponent } from '../components/login/login';
import { HomeComponent } from '../components/home/home';
import { ListTaskComponent } from '../components/listTask/listTask';

@NgModule({
  declarations: [
    SDTask,
    LoginComponent,
    HomeComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SDTask)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SDTask,
    LoginComponent,
    HomeComponent,
    ListTaskComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
