import { Action } from "@ngrx/store";
import { Task } from "./task.model";

export const ADD_TASK="[Task] Add task";
export const DELETE_TASK="[Task] Delete task";
export const EDIT_TASK="[Task] Edit task";
export const SAVE_TO_LOCALSTORAGE="[LocalStorage] Save";

export class AddTask implements Action{
    readonly type: string=ADD_TASK;
    
    constructor(public payload:Task){

    }
}

export class DeleteTask implements Action{
    readonly type: string=DELETE_TASK;
    constructor(public payload:number){
    }
}

export class EditTask implements Action{
    readonly type: string=EDIT_TASK;
    constructor(public payload:Task){

    }
}
export class SaveToLocalStorage implements Action{
    readonly type: string=SAVE_TO_LOCALSTORAGE;
    constructor(public payload:Task[]){

    } 
}

export type TaskActions = AddTask | DeleteTask | EditTask | SaveToLocalStorage;

