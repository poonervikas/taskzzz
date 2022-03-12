import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { storageMetaReducer } from 'src/store/storage.metareducer';
import * as fromApp from '../store/app.reducer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Angular material coponents
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // console.log('state', state);
    // console.log('action', action);
 
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = [debug,storageMetaReducer];


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    AddTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule, 
    MatIconModule, 
    MatInputModule,
    StoreModule.forRoot(fromApp.appReducer, { metaReducers }), //merged reducer map
    FormsModule,
    CommonModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
