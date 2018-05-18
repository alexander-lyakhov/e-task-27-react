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
    }

    render() {
        return (
            <div className="main">
                <PageHeader onSearch={this.search} />
                <MovieGrid />
            </div>
        )
    }
}