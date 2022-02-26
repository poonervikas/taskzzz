import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/store/task-store/task.model';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private store:Store<fromApp.AppState>) { }
  tasks:Task[];
  theme:string;
  ngOnInit(): void {
    this.store.select('task').subscribe(data=>{
      this.tasks=data.tasks
    })

    this.store.select('customization').subscribe(data=>{
      this.theme=data.theme;
    })
  }

}
