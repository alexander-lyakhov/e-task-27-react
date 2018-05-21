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

    get sortedData() {
    	let {searchQuery, sortQuery} = this.props;

    	console.log(sortQuery)

        if (sortQuery === 'nosort') {
        	return data;
        }

        return data.sort(function(a, b) {

            console.log(a[sortQuery], b[sortQuery], sortQuery);

        	if (+a[sortQuery] > +b[sortQuery]) {
        		return 1;
        	}

        	if (+a[sortQuery] < +b[sortQuery]) {
        		return -1;
        	}

        	return 0;
        });
    }

    get movies() {

    	let {searchQuery, sortQuery} = this.props;

        return this.sortedData.map((item, index) => {
            if (item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0) {
                return <Movie key={this.uid} details={item} />
            }
        })
    }

    render() {

        let {searchQuery, sortQuery} = this.props;

        return (
            <div className='movies'> {this.movies} </div>
        )
    }
}