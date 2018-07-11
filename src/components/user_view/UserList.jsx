import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';

import './user-list.scss';

const UserList = (props) => {
    // whenever the user prop gets a new value re-render this element. Users were added in the Content.jsx via the PersonFinder
    const { users } = props;
    return (
        <Accordion head="User List" defaultOpened>
            <div className="accordion__content" id="usersList">
                {/**
                 * If at least one user was selected, render the users inside the user list
                 * Else return a placeholder text
                 * This is the shortHand if (condition ? (if true) : (represents else block))
                 */}
                {users.length > 0
                    ? users.map(user => (
                        <div className="user" key={user.facebookId}>
                            <div
                                className="user__image"
                                style={{ backgroundImage: `url(http://graph.facebook.com/${user.facebookId}/picture?type=square` }}
                            />
                            <div className="user__name">
                                {user.name}
                            </div>
                        </div>
                    ))
                    : (
                        <div>

                            No users have been selected
                        </div>
                    )
                }
            </div>
        </Accordion>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        facebookId: PropTypes.number,
        name: PropTypes.string
    }))
};

UserList.defaultProps = {
    users: []
};

export default UserList;
