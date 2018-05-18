import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-card.scss';

import iconLike from './img/icon-like.svg';
import iconDislike from './img/icon-dislike.svg';
import iconStar from './img/icon-star.svg';

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
                			<div className="likes">
                				<a href="#" className="icon icon-dislike"><img src={iconDislike} width="24" height="24"/></a>
                				<div className="like-value">99</div>
                				<a href="#" className="icon icon-like"><img src={iconLike} width="24" height="24"/></a>
                			</div>
                		</div>
                	</div>

                	<ul className="rating">
                		<li className="rating-item"><img src={iconStar} width="24" height="24" /></li>
                		<li className="rating-item"><img src={iconStar} width="24" height="24" /></li>
                		<li className="rating-item"><img src={iconStar} width="24" height="24" /></li>
                		<li className="rating-item"><img src={iconStar} width="24" height="24" /></li>
                		<li className="rating-item"><img src={iconStar} width="24" height="24" /></li>
                	</ul>
                </div>
            </div>
        )
    }
}