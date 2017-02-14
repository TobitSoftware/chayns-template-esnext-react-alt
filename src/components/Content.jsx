/**
 * Created by PHugenroth on 13.02.2017.
 */
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import assign from 'object-assign';

import TaskStore from '../stores/TaskStore';

import TaskAction from '../actions/TaskAction';

import ToDoInput from './user_view/ToDoInput';
import ToDoList from './user_view/ToDoList';

/**
 * Decorator, which connects the Component to the Store
 *
 */
@connectToStores
export default class Content extends React.Component{

    static getStores() {
        return [TaskStore];
    }

    static getPropsFromStores() {
        return assign({},
            TaskStore.getState()
        );
    }

    constructor(){
        super();
        this.state = {
            inputValue: ''
        };

        this.inputOnChange = this.inputOnChange.bind(this);
        this.inputOnBlur = this.inputOnBlur.bind(this);
    }

    inputOnChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    inputOnBlur(){
        if(this.state.inputValue) {
            TaskAction.addTask(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        }
    }

    render(){
        /**
         * The states from the connected stores are available
         * in the "this.props"-Object
         */
        return(
            <div className="tapp__content content">
                <ToDoInput
                    value={this.state.inputValue}
                    onBlur={this.inputOnBlur}
                    onChange={this.inputOnChange}
                />
                <ToDoList
                    items={this.props.tasks}
                />
            </div>
        );
    }
}