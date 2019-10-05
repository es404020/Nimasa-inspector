import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from 'src/app/component/vessel/button-renderer.component';

@NgModule({
 
  imports: [
    HttpClientModule,

    AngularEditorModule ,
    ReactiveFormsModule,FormsModule ,
    ClarityModule ,
    NgxSkeletonLoaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  exports:[
    HttpClientModule,
    AgGridModule,
  
    ReactiveFormsModule,FormsModule ,
    ClarityModule,
    NgxSkeletonLoaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig).ngModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ]
})
export class SharedModule { }
