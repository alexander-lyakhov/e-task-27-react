import React from 'react';
import baseComponent from '../base-component.jsx';
import data from '../../data/data.js';

import './user-list.scss';

export default class UserList extends baseComponent
{
    constructor(props) {
        super(props);
    }

    get uid() {
        return Math.floor((Math.random() * new Date().getTime())).toString(16);
    }

    get users() {
        return  data.filter(item =>
            item.full_name.toLowerCase().indexOf(this.props.query.toLowerCase()) === 0
        );
    }

    render() {
        return (
            <ul className="user-list">
                {
                    this.users.map((user, index) =>
                        <li className="user-list__item" key={this.uid}>
                            <div className="thumbnail">
                                <img src={user.medium_avatar_url} width="72" height="72" alt="" />
                            </div>
                            <div className="user-info">
                                <div className="name">{user.full_name}</div>
                                <div className="headline">{user.headline}</div>
                            </div>
                        </li>
                    )
                }
            </ul>
        )
    }
}