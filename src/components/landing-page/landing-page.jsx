import React from 'react';
import baseComponent from '../base-component.jsx';

import './landing-page.scss';

export default class SortControl extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="sort-control noselect" onClick={this.clickHandler} ref="btnGroup">
                <li className="sort-control__item" data-action="nosort">No Sorting</li>
                <li className="sort-control__item" data-action="likes">By Likes</li>
                <li className="sort-control__item" data-action="stars">By Stars</li>
            </ul>
        )
    }
}