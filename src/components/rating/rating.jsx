import React from 'react';
import baseComponent from '../base-component.jsx';

import './rating.scss';
import iconStarOutline from './img/icon-star-outline.svg';
import iconStarSolid from './img/icon-star-solid.svg';

export default class Rating extends baseComponent
{
    constructor(props) {
        super(props);
    }

    getStar(index) {
        return index < this.props.stars ? iconStarSolid:iconStarOutline;
    }

    get stars() {
        var arr = [];

        for (let i = 0; i < 5; i++) {
            arr.push(<li className="rating-item" key={this.uid}><img src={this.getStar(i)} width="24" height="24" /></li>);
        }

        return arr;
    }

    render() {
        return (
            <ul className="rating">{this.stars}</ul>
        )
    }
}