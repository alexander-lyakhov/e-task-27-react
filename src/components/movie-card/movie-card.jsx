import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-card.scss';

export default class MovieCard extends baseComponent
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='movie-placeholder'>
                <div className='movie-card'></div>
            </div>
        )
    }
}