NGRX Version 11 has the minimum version requirements:

Angular version 11.x
Angular CLI version 11.x
TypeScript version 4.0.x
RxJS version 6.5.x

-------------------------------------------
   // ERROR in src/store/app.reducer.ts:9:5 - error TS2322: Type '(state: State, action: any) => {}' is not assignable to type 'ActionReducer<State, any>'.
      Property 'tasks' is missing in type '{}' but required in type 'State'.

    9     task: fromTask.TaskReducer
          ~~~~

      src/store/task-store/task.reducer.ts:6:5
        6     tasks: Task[];
              ~~~~~
        'tasks' is declared here.
      src/store/app.reducer.ts:5:5
        5     task:fromTask.State
              ~~~~
        The expected type comes from property 'task' which is declared here on type 'ActionReducerMap<AppState, any>'

        //

        due to

export function TaskReducer(state = initialState, action: any) {

    switch (action.type) {
        case TaskActions.ADD_TASK:

        return{
            ...state,
            tasks:[...state.tasks,action.payload]
        }

        case TaskActions.DELETE_TASK:
            return{
//this
            }

        case TaskActions.EDIT_TASK:
            return{
// and this
            }

        default:
            return state;
    }
}

-------------------------------------------------------
// ERROR in src/store/app.reducer.ts:9:5 - error TS2322: Type '(state: State, action: TaskActions) => { tasks: (number | Task)[]; }' is not assignable to type 'ActionReducer<State, Action>'.
  Call signature return types '{ tasks: (number | Task)[]; }' and 'State' are incompatible.
    The types of 'tasks' are incompatible between these types.
      Type '(number | Task)[]' is not assignable to type 'Task[]'.
        Type 'number | Task' is not assignable to type 'Task'.
          Type 'number' is not assignable to type 'Task'.

9     task: fromTask.TaskReducer
      ~~~~

  src/store/app.reducer.ts:5:5
    5     task:fromTask.State
          ~~~~
    The expected type comes from property 'task' which is declared here on type 'ActionReducerMap<AppState, Action>'

    //

    due to action:TaskActions.TaskActions,
    instead use action:any