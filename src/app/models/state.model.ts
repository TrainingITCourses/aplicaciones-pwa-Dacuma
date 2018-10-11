import { Options } from './../options';

export interface State {
    filteredLaunches: any[];
    missions: any[];
    agencies: any[];
    statuses: any[];
    option: Options;
    value: number;
}

export const initialState: State = {
    filteredLaunches: [],
    missions: [],
    agencies: [],
    statuses: [],
    option: Options.status,
    value: -1
};
