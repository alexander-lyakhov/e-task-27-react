import React from 'react';
import baseComponent from '../base-component.jsx';
import './app.scss';

import PageHeader from '../page-header/page-header.jsx';
import MovieGrid from '../movie-grid/movie-grid.jsx';

import '../../assets/react-logo.png';

export default class App extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        };

        this.search = this.search.bind(this);
    }

    search(query) {
        this.setState({searchQuery: query.trim()})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.searchQuery !== nextState.searchQuery;
    }

    render() {
        return (
            <div className="main">
                <PageHeader onSearch={this.search} />
                <MovieGrid query={this.state.searchQuery} />
            </div>
        )
    }
}