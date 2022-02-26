import { Task } from './task.model';
import * as TaskActions from './task.actions';
import { Action } from '@ngrx/store';

export interface State {
    tasks: Task[];
}

const initialState: State = {
    //  tasks: [
    //     { taskId: 1, title: "Read a book on discipline",description:"Read the chapter 10 of ATOMIC HABITS",doneStatus:true },
    //     { taskId: 2, title: "Go to Gym",description:"Its leg day",doneStatus:true },
    //     { taskId: 3, title: "Buy Grocery",description:"Buy grocery from mart",doneStatus:false }
    // ]
    tasks: []
}

export function TaskReducer(state = initialState, action: any) {

    switch (action.type) {
        case TaskActions.ADD_TASK:

            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case TaskActions.DELETE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter(task=>task.taskId!=action.payload)
            }

        case TaskActions.EDIT_TASK:
            var index=state.tasks.findIndex(task=>task.taskId===action.payload.taskId);
            var updatedTasks=state.tasks;
            updatedTasks[index]=action.payload;
            return{
                ...state,
                tasks:updatedTasks
            }

        default:
            return state;
    }
}