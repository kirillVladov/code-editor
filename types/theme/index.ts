import {IBaseModel} from "../common";

export enum ThemeEnum {
    light="light",
    dark="vs-dark",
}

export interface IThemeSelect extends IBaseModel {
    value: ThemeEnum;
}