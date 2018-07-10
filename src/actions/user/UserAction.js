import { createActions } from 'alt-utils/lib/decorators';
import alt from '../../alt';

@createActions(alt)
export default class UserAction {
    constructor() {
        // generates an action for each function in the store
        this.generateActions(
            'addUser'
        );
    }
}
