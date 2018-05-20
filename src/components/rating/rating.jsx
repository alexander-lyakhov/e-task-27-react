import React from 'react';
import baseComponent from '../base-component.jsx';

import './rating.scss';
import iconStarOutline from './img/icon-star-outline.svg';
import iconStarSolid from './img/icon-star-solid.svg';

export default class Rating extends baseComponent
{
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
    }

    getIcon(index) {
        return index < this.props.value ? iconStarSolid:iconStarOutline;
    }

    get stars() {
        var arr = [];

        for (let i = 0; i < 5; i++) {
            arr.push(
                <li className="rating-item" key={this.uid} data-current-value={i + 1} onClick={this.changeRating}>
                    <img src={this.getIcon(i)} width="24" height="24" />
                </li>
            );
        }

        return arr;
    }

    changeRating(e) {
        this.emit('onChange', e.currentTarget.getAttribute('data-current-value'));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.value !== nextProps.value;
    }

    render() {
        return (
            <ul className="rating">{this.stars}</ul>
        )
    }
}