import React from 'react';
import PropTypes from 'prop-types';

import PersonFinder from 'tobit-chayns_components/react-chayns-personfinder';

import UserAction from '../../actions/user/UserAction';

const PersonFinderWrapper = ({ addUser }) => (
    <PersonFinder
        placeholder="Search for users"
        /**
         * onChange is a person finder specified event provided via the chayns api
         * it returns the selected user to the addUser function
         */
        onChange={PersonFinderWrapper.selectUser}
    />
);

//Pushes an user object to the state 'user' and refresh's the react component 'UserList'
PersonFinderWrapper.selectUser = (object) => {
    UserAction.addUser(object.user);
};

PersonFinderWrapper.propTypes = {
    addUser: PropTypes.func
};

export default PersonFinderWrapper;