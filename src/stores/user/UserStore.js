import { createStore } from 'alt-utils/lib/decorators';
import alt from '../../alt';

import UserAction from '../../actions/user/UserAction';

@createStore(alt)
export default class UserStore {
    // This is a reference to the store’s internal name. This is either the identifier you provided to createStore or StoreModel’s class name.
    static displayName = 'UserStore';

    constructor() {
        // This method takes in an action’s symbol and a store’s method defined in your StoreModel class. The store’s method is then bound to that action so whenever the action dispatches a payload, the specified handler will receive it.
        this.bindActions({
            addUser: UserAction.addUser
        });
        // This defines the state, that can be updated by actions and then get to the Components props, when it changes.
        this.state = {
            users: []
        };
    }

    addUser(user) {
        const { users } = this.state;
        users.push(user);
        this.setState({
            users
        });
    }
}
