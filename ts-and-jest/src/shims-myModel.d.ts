import _Employee from '@/model/Employee';

export = myModel;
declare module myModel {
    export interface Employee extends _Employee {}
}