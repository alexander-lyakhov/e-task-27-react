import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-grid.scss';
import data from './data.js';

import Movie from '../movie/movie.jsx';

export default class MovieGrid extends baseComponent
{
    constructor(props) {
        super(props);

        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(e) {

        console.log(e);

        for (let i = 0; i < data.length; i++) {

            if (data[i].id === e.id) {
                return data[i].stars = e.stars;
            }
        }
    }

    get sortedData() {

        let {sortQuery} = this.props;

        if (sortQuery === 'nosort') {
            return data;
        }

        return [].concat(data).sort(function(a, b) {

            console.log(a[sortQuery], b[sortQuery], sortQuery);

            if (+a[sortQuery] < +b[sortQuery]) {
                return 1;
            }

            if (+a[sortQuery] > +b[sortQuery]) {
                return -1;
            }

            return 0;
        });
    }

    get movies() {

        let {searchQuery} = this.props;

        return this.sortedData.map((item, index) => {

            if (item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0) {
                return (
                    <Movie
                        key={item.id}
                        details={item}
                        onRatingChange={this.changeRating}
                     />
                )
            }
        })
    }

    render() {

        console.log('movie-grid: render');

        let {searchQuery, sortQuery} = this.props;

        return (
            <div className='movies'> {this.movies} </div>
        )
    }
}