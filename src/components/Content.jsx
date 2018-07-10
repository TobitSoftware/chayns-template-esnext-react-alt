import React from 'react';
import { Mode } from 'chayns-components';

import UserList from './user_view/UserList';
import PersonFinderWrapper from './admin_view/PersonFinderWrapper';

import UserStore from '../stores/user/UserStore';

import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Content extends React.Component {
    //Retrieves the store instance that was created.
    static getStores() {
        // this will handle the listening/unlistening for you
        return [UserStore];
    }

    static getPropsFromStores() {
        // this is the data that gets passed down as props
        // each key in the object returned by this function is added to the `this.props`
        return {
            ...UserStore.getState()
        };
    }

    render() {
        return (
            <div className="tapp__content content">
                <Mode mode={1} /**listens for mode 1 of modeswitch**/>
                    <PersonFinderWrapper />
                </Mode>
                <UserList user={this.props.users} /**Provide the user list array to the UserList element as a prop**/ />
            </div>
        );
    }
}