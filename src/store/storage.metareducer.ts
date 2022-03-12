import { Action, ActionReducer } from "@ngrx/store";
import {merge, pick} from 'lodash-es'

function setSavedState(state:any,localStorageKey:string){
    localStorage.setItem(localStorageKey,JSON.stringify(state));
}

function getSavedState(localStorageKey:string){
    return JSON.parse(localStorage.getItem(localStorageKey));
}

// the keys from state which we'd like to save.
const stateKeys = ['customization.theme','task'];
// the key for the local storage.
const localStorageKey = 'taskzzz_app_storage';


export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>) {
    let onInit = true; // after load/refresh…
    return function(state: S, action: A): S {
      // reduce the nextState.
      const nextState = reducer(state, action);
      //console.log("nextState",nextState)
      // init the application state.
      if (onInit) {
        onInit= false;
        const savedState = getSavedState(localStorageKey);
        return merge(nextState, savedState);
      }
      // save the next state to the application storage.
      const stateToSave = pick(nextState, stateKeys);
      setSavedState(stateToSave, localStorageKey);
      return nextState;
    };
  }