import * as CustomizationActions from '../customizations-store/customizations.actions';

const initialState:State={
    theme:'light'
}

export interface State{
    theme:string
}

export function CustomizationsReducer(state=initialState,action){
    switch (action.type) {
        case CustomizationActions.SWITCH_THEME:
            
            return{
                ...state,
                theme:action.payload
            }
    
        default:
            return state;
    }
}