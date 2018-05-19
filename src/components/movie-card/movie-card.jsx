import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-card.scss';

import Likes from '../likes/likes.jsx';
import Rating from '../rating/rating.jsx';

export default class MovieCard extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='movie-placeholder' key={this.uid}>
                <div className='movie-card'>

                    <div className="thumbnail">
                        <img src={this.props.image} width="256" height="256" />
                    </div>

                    <div className="info">
                        <h2>{this.props.title}</h2>

                        <div className="status">
                            <Likes />
                            <Rating stars={this.props.stars}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}