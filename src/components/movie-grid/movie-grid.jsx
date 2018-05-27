import React from 'react';
import baseComponent from '../base-component.jsx';

import './movie-grid.scss';
import data from './data.js';

import Movie from '../movie/movie.jsx';

export default class MovieGrid extends baseComponent
{
	constructor(props) {
		super(props);

		this.state = {
			data: data
		};

		this.changeLikes = this.changeLikes.bind(this);
		this.changeRating = this.changeRating.bind(this);
		this.movieTitleClick = this.movieTitleClick.bind(this);
	}

	changeLikes(e) {
		//console.log('changeLikes', e);

		for (let i = 0; i < data.length; i++) {

			if (data[i].id === e.id) {
				data[i].likes += e.delta;
				break;
			}
		}

		this.setState({data: data});
	}

	changeRating(e) {

		//console.log('changeRating', e);

		for (let i = 0; i < data.length; i++) {

			if (data[i].id === e.id) {
				data[i].stars = e.stars;
				break;
			}
		}

		this.setState({data: data});
	}

	get sortedData() {

		let {sortQuery} = this.props;
		let {data: arr} = this.state;

		if (sortQuery === 'nosort') {
			return arr;
		}

		return [].concat(arr).sort(function(a, b) {
			if (+a[sortQuery] < +b[sortQuery]) {
				return 1;
			}

			if (+a[sortQuery] > +b[sortQuery]) {
				return -1;
			}

			return 0;
		});
	}

	movieTitleClick(e) {
		this.emit('onMovieTitleClick', e);
	}

	get movies() {

		let {searchQuery} = this.props;

		let arr = this.sortedData.filter((item, index) => {
			return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0;
		});

		if (arr.length) {

			return arr.map((item, index) => {
				return (
					<Movie
						key={item.id}
						details={item}
						onLikeChange={this.changeLikes}
						onRatingChange={this.changeRating}
						onMovieTitleClick={this.movieTitleClick}
					 />
				)
			})
		}
		else {
			return (
				<div className="no-resalt">Nothing found</div>
			);
		}
	}

	render() {

		//console.log('movie-grid: render');

		let {searchQuery, sortQuery} = this.props;

		return (
			<div className='movies'> {this.movies} </div>
		)
	}
}