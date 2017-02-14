import alt from '../alt';
import {createActions} from 'alt-utils/lib/decorators';

@createActions(alt)
export default class TaskAction {
    constructor() {
        this.generateActions(
            'fetchTask',
            'updateTask',
            'fetchingTaskFailed',
            'addTask'
        );
    }
}