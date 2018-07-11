import React from 'react';
import PropTypes from 'prop-types';
import { Mode } from 'chayns-components';
import connectToStores from 'alt-utils/lib/connectToStores';

import UserList from './user_view/UserList';
import PersonFinderWrapper from './admin_view/PersonFinderWrapper';
import UserStore from '../stores/user/UserStore';


@connectToStores
export default class Content extends React.Component {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            facebookId: PropTypes.number,
            name: PropTypes.string
        }))
    };

    static defaultProps = {
        users: []
    };

    // Retrieves the store instance that was created.
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
        const { users } = this.props;
        return (
            <div className="tapp__content content">
                <Mode mode={1} /** listens for mode 1 of modeswitch* */>
                    <PersonFinderWrapper />
                </Mode>
                <UserList users={users} /** Provide the user list array to the UserList element as a prop* */ />
            </div>
        );
    }
}
