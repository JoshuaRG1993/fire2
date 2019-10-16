import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
//import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
//import { EditUserResolver } from './edit-user/edit-user.resolver';
// import { NewUserComponent } from './new-user/new-user.component';
 import { HomeComponent } from './home/home.component';
 import { NavMenuComponent } from './nav-menu/nav-menu.component';
 import { FetchDataComponent } from './fetch-data/fetch-data.component';
 import { LoginPageComponent } from './login-page/login-page.component';
 import { BuildPageComponent } from './build-page/build-page.component';
 import { PreviewPaneComponent } from './build-page/preview-pane/preview-pane.component';
 import { SurveyPaneComponent } from './build-page/survey-pane/survey-pane.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
     AppComponent,
    // AvatarDialogComponent,
    // EditUserComponent,
    // NewUserComponent,
     HomeComponent,
    NavMenuComponent,
    FetchDataComponent,
    LoginPageComponent,
    BuildPageComponent,
    PreviewPaneComponent,
    SurveyPaneComponent,
  ],
 // entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
  RouterModule.forRoot([
      { path: '', component: LoginPageComponent, pathMatch: 'full' },
    { path: 'fetch-data', component: FetchDataComponent },
  ])
  ],
  providers: [FirebaseService], // , EditUserResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
