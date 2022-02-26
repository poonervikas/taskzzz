import { Action } from "@ngrx/store";

export const SWITCH_THEME="[CUSTOMIZATION] Switch Theme";

export class SwitchTheme implements Action{
    readonly type= SWITCH_THEME;
    constructor(public payload:string){}
}