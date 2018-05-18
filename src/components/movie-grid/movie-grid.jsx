import React from 'react';
import baseComponent from '../base-component.jsx';
import data from '../../data/data.js';

import './movie-grid.scss';

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
                    <div className='movie-placeholder' key={this.uid}>
                        <div className="movie-card"></div>
                    </div>
                )
            }
            </div>
        )
    }
}