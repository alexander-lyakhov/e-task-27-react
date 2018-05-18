import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-grid.scss';
import data from './data.js';

import MovieCard from '../movie-card/movie-card.jsx';

export default class MovieGrid extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='movies'>
            {
                data.map((item, index) =>
                	<MovieCard
                		image={item.posterUrl}
                		title={item.title}
                	/>
                )
            }
            </div>
        )
    }
}