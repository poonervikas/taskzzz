import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreateTaskDialog() {
    this.dialog.open(
      CreateTaskComponent,
      {
        data: {
          isModeAdd: true
        },
        panelClass: 'custom-modalbox'
      });

  }



}
