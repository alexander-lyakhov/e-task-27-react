import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-grid.scss';
import data from './data.js';

import Movie from '../movie/movie.jsx';

export default class MovieGrid extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {

        let {query} = this.props;

        return (
            <div className='movies'>
            {
                data.map((item, index) => {
                    if (item.title.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                        return <Movie key={this.uid} details={item} />
                    }
                })
            }
            </div>
        )
    }
}