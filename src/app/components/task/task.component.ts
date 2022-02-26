import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/store/task-store/task.model';
import * as TaskActions from '../../../store/task-store/task.actions';
import * as fromApp from '../../../store/app.reducer';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() theme;
  @Input() taskData : Task;
  constructor(private store:Store<fromApp.AppState>,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  deleteTask(id){
    this.store.dispatch(new TaskActions.DeleteTask(id) )
  }
  editTask(taskData){
    //open edit dialog
    this.dialog.open(
      CreateTaskComponent,
      {
        data:{
          isModeAdd:false,
          ...taskData
        }});
  }
}
