import alt from '../alt';
import {createStore} from 'alt-utils/lib/decorators';

import TaskAction from '../actions/TaskAction';

import TaskSource from '../sources/TaskSource';


@createStore(alt)
export default class TaskStore {
    static displayName = 'TaskStore';

    constructor() {
        this.state = {
            tasks: []
        };

        /**
         * Binds the actions to method of the Store.
         * When ever an action gets executed it will trigger all method of all stores
         * where an method is bind to this action
         */
        this.bindListeners({
            fetchTask: TaskAction.fetchTask,
            updateTask: TaskAction.updateTask,
            addTask: TaskAction.addTask,
            fetchingTaskFailed: TaskAction.fetchingTaskFailed
        });
        /**
         * TaskStore gets the Data from the TaskSource.
         */
        this.registerAsync(TaskSource);
    }

    /**
     * Executes the "performFetch"-Method from the connected Source (in this case TaskSource)
     */
    fetchTask(){
        this.getInstance().performFetch();
    }

    /**
     * The update method will be called whenever the tasks state should be changed.
     * setState will trigger the re-rendering of the connected components (in this case Content and every
     * Component below Content)
     * @param value
     */
    updateTask(value){
        this.setState({
            tasks: value
        })
    }

    addTask(value){
        let tasks = this.state.tasks;
        tasks.push(value);
        TaskAction.updateTask.defer(tasks);
    }

    fetchingTaskFailed(){
        /**
         * In this example this method will never be executed. When
         * working
         */
    }
}