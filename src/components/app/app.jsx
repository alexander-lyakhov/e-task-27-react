import React from 'react';
import baseComponent from '../base-component.jsx';
import './app.scss';

import Header from '../header/header.jsx';
import MovieGrid from '../movie-grid/movie-grid.jsx';
import LandingPage from '../landing-page/landing-page.jsx';

import '../../assets/react-logo.png';

export default class App extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            sortQuery: 'nosort',
            isLandingOpen: false,
            landingPageDetails: {}
        };

        this.search = this.search.bind(this);
        this.sort = this.sort.bind(this);

        this.showLandingPage = this.showLandingPage.bind(this);
        this.hideLandingPage = this.hideLandingPage.bind(this);
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

    showLandingPage(data) {
        this.setState({
            isLandingOpen: true,
            landingPageDetails: data
        });
    }

    hideLandingPage() {
        this.setState({isLandingOpen: false});
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
                    onMovieTitleClick={this.showLandingPage}
                />

                <LandingPage
                    isOpen={this.state.isLandingOpen}
                    details={this.state.landingPageDetails}
                    onClose={this.hideLandingPage}
                />
            </div>
        )
    }
}