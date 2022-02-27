import { Component, Inject, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CreateTask } from 'src/models/createtask.model';
import { Task } from 'src/store/task-store/task.model';
import * as fromApp from '../../../store/app.reducer';
import * as TaskActions from '../../../store/task-store/task.actions';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  theme='';
  createMode: string;
  constructor(public dialogRef: MatDialogRef<CreateTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: CreateTask, private store: Store<fromApp.AppState>) { }
  taskFormData={
    title:"",
    description:"",
    doneStatus:false
  }


  ngOnInit(): void {
    this.store.select('customization').subscribe(data=>{
      this.theme=data.theme;
    })
    this.createMode = this.data.isModeAdd ? "Add" : "Edit";
    this.initializeFormData()
  }

  initializeFormData(){
    this.taskFormData.title=this.data.title;
    this.taskFormData.description=this.data.description;
    this.taskFormData.doneStatus=this.data.doneStatus;
  }
  onSubmit(form) {
    var payload: Task = {
      taskId:null,
      title: form.value.title,
      description: form.value.description,
      doneStatus: form.value.doneStatus
    }
    if (this.data.isModeAdd) {
      //dispatch add action
      payload.taskId=Date.now();
      this.store.dispatch(new TaskActions.AddTask(payload));
    }
    else {
      //dispatch edit action
      payload.taskId=this.data.taskId;
      this.store.dispatch(new TaskActions.EditTask(payload));
    }
    //close dialog
    this.dialogRef.close();
  }

  delete() {
    //check if delete is possible or not
    this.store.dispatch(new TaskActions.DeleteTask(this.data.taskId));
  }
}
