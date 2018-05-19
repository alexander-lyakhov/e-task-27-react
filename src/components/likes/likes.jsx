import React from 'react';
import baseComponent from '../base-component.jsx';

import './likes.scss';

import iconLike from './img/icon-like.svg';
import iconDislike from './img/icon-dislike.svg';

export default class Likes extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.decreaseLikes = this.decreaseLikes.bind(this);
        this.increaseLikes = this.increaseLikes.bind(this);
    }

    decreaseLikes(e) {
        e.preventDefault();
        this.setState({value: this.state.value - 1});
    }

    increaseLikes(e) {
        e.preventDefault();
        this.setState({value: this.state.value + 1});
    }

    render() {
        return (
            <div className="likes">
                <a href="#" className="like-icon like-icon__down" onClick={this.decreaseLikes}><img src={iconDislike} width="24" height="24"/></a>
                <div className="like-value">{this.state.value}</div>
                <a href="#" className="like-icon like-icon__up" onClick={this.increaseLikes}><img src={iconLike} width="24" height="24"/></a>
            </div>
        )
    }
}