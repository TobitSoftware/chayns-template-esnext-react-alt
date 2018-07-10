import React from 'react';

import { PersonFinder } from 'chayns-components';

import UserAction from '../../actions/user/UserAction';

const PersonFinderWrapper = () => (
    <PersonFinder
        style={{ width: '100%' }}
        placeholder="Search for users"
        /**
         * onChange is a person finder specified event provided via the chayns api
         * it returns the selected user to the addUser function
         */
        onChange={PersonFinderWrapper.selectUser}
    />
);

// Pushes an user object to the state 'user' and refresh's the react component 'UserList'
PersonFinderWrapper.selectUser = (object) => {
    UserAction.addUser(object.user);
};

export default PersonFinderWrapper;
