import React from 'react';

import PersonFinder from 'tobit-chayns_components/react-chayns-personfinder';

import UserAction from '../../actions/user/UserAction';

    const _placeholder = 'Search for users';

     //the const replaces a class and just returns the jsx code
     //has no functions like states, because its not a react component
    const _PersonFinder = ()=> {
        return (
            <PersonFinder
                placeholder={_placeholder}
                /**
                 * onChange is a person finder specified event provided via the chayns api
                 * it returns the selected user to the addUser function
                 */
                onChange={_PersonFinder.selectUser}
            />
        );
    };

    //Pushes an user object to the state 'user' and refresh's the react component 'UserList'
    _PersonFinder.selectUser = (object) => {
        UserAction.addUser(object.user);
    };

    export default _PersonFinder;