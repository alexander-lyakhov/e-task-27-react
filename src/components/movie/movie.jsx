import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie.scss';

import Likes from '../likes/likes.jsx';
import Rating from '../rating/rating.jsx';

export default class Movie extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = this.props.details;

        this.changeLikes = this.changeLikes.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    changeLikes(delta) {
        this.setState({likes: this.state.likes + delta});
    }

    changeRating(val) {
        if (this.state.stars !== val) {
            this.setState({stars: val});
            this.emit('onRatingChange', {id: this.state.id, stars: val});
        }
    }

    render() {
        let {posterUrl: image, title, stars, likes} = this.props.details;

        console.log('movie: render');

        return (
            <div className='movie-placeholder' key={this.uid}>
                <div className='movie-card'>

                    <div className="thumbnail">
                        <img src={image} width="256" height="256" />
                    </div>

                    <div className="info">
                        <h2>{title}</h2>

                        <div className="status">
                            <Likes value={likes} onChange={this.changeLikes}/>
                            <Rating value={stars} onChange={this.changeRating}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}