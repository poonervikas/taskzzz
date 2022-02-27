import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/store/task-store/task.model';
import * as fromApp from '../store/app.reducer';
import * as CustomizationActions from '../store/customizations-store/customizations.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme = '';
  tasks: Task[] = [];
  constructor(private store: Store<fromApp.AppState>) { }
  ngOnInit(): void {
    //fetch data from localstorage on app loads
    this.fetchDataFromLocalStorage();

    this.theme = 'light';
    this.store.select('customization').subscribe(data => {
      if (data) {
        this.theme = data.theme;
      }

    })
  }
  fetchDataFromLocalStorage() {
    var appData=localStorage.getItem('taskzzz');
    this.store.select('task').subscribe(data=>{

    })
  }

  turnOnLightMode() {
    this.store.dispatch(new CustomizationActions.SwitchTheme('light'))
  }
  turnOnDarkMode() {
    this.store.dispatch(new CustomizationActions.SwitchTheme('dark'))
  }
}
