import { ActionReducerMap } from '@ngrx/store';
import * as fromTask from './task-store/task.reducer';
import * as fromCustomizations from './customizations-store/customizations.reducer'

export interface AppState{
    task:fromTask.State;
    customization:fromCustomizations.State
}

export const appReducer: ActionReducerMap<AppState>={
    task: fromTask.TaskReducer,
    customization: fromCustomizations.CustomizationsReducer
}