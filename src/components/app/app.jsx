import React from 'react';
import baseComponent from '../base-component.jsx';
import './app.scss';

import Header from '../header/header.jsx';
import MovieGrid from '../movie-grid/movie-grid.jsx';
import MovieGrid from '../landing-page/landing-page.jsx';

import '../../assets/react-logo.png';

export default class App extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            sortQuery: 'nosort'
        };

        this.search = this.search.bind(this);
        this.sort = this.sort.bind(this);
        this.showMovieDetails = this.showMovieDetails.bind(this);
    }

    search(query) {
        if (this.state.searchQuery !== query.trim()) {
            this.setState({searchQuery: query.trim()})
        }
    }

    sort(query) {
        if (this.state.sortQuery !== query) {
            this.setState({sortQuery: query});
        }
    }

    showMovieDetails(e) {
        console.log('showMovieDetails', e);
    }

    render() {
        return (
            <div className="main">
                <Header
                    onSearch={this.search}
                    onSort={this.sort}
                />

                <MovieGrid
                    searchQuery={this.state.searchQuery}
                    sortQuery={this.state.sortQuery}
                    onMovieTitleClick={this.showMovieDetails}
                />
            </div>
        )
    }
}