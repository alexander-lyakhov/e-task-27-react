import React from 'react';
import baseComponent from '../base-component.jsx';
import './app.scss';

import PageHeader from '../page-header/page-header.jsx';
import UserList from '../user-list/user-list.jsx';

import '../../assets/react-logo.png';

export default class App extends baseComponent
{
    constructor(props) {
        super(props);

        this.state = {query: ''};
        this.search = this.search.bind(this);
    }

    search(query) {
        this.setState({query: query});
    }

    render() {
        return (
            <div className="main">
                <PageHeader onSearch={this.search}/>
                <UserList query={this.state.query} />
            </div>
        )
    }
}