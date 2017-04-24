import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'tobit-chayns_components/react-chayns-accordion';

import './user-list.scss';

export default class UserList extends React.Component {

    //whenever the user prop gets a new value re-render this element. Users were added in the Content.jsx via the PersonFinder
    static propTypes = {
        user: PropTypes.arrayOf(PropTypes.object)
    };

    constructor() {
        super();
    }

    render() {
        return(
            <Accordion head="User List" defaultOpened>
                <div className="accordion__content" id="usersList">
                    {/**
                     * If at least one user was selected, render the users inside the user list
                     * Else return a placeholder text
                     * This is the shortHand if (condition ? (if true) : (represents else block))
                     */}
                    {this.props.user.length > 0 ?
                        this.props.user.map((user, index) => {
                            return (
                                <div className="user" key={index}>
                                    <div className="user__image" style={{backgroundImage: 'url(http://graph.facebook.com/' + user.facebookId + '/picture?type=square'}} />
                                    <div className="user__name">{user.name}</div>
                                </div>
                            )
                        }):
                        (
                            <div>No users have been selected</div>
                        )
                    }
                </div>
            </Accordion>
        );
    }
};