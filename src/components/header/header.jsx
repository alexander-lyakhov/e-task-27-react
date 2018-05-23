import React from 'react';
import baseComponent from '../base-component.jsx';

import './header.scss';
import iconSearch from './img/magnify.svg';

import SortControl from '../sort-control/sort-control.jsx';

export default class Header extends baseComponent
{
    constructor(props) {
        super(props);

        this.triggerSearch = this.triggerSearch.bind(this);
        this.triggerSort = this.triggerSort.bind(this);
    }

    triggerSearch(e) {

        if (e.type === 'keyup' && e.keyCode !== 13) {
            return;
        }

        this.emit('onSearch', this.refs.txtSearch.value);
    }

    triggerSort(val) {
        this.emit('onSort', val);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <header>
                <div className="header-area">
                    <div className="text-wrapper">
                        <input type="text" autoFocus className="txt-search" ref="txtSearch" onKeyUp={this.triggerSearch} />
                        <a href="#" className="btn-search" onClick={this.triggerSearch}>
                            <img src={iconSearch} width="24" height="24" />
                        </a>
                    </div>
                    <SortControl onChange={this.triggerSort} />
                </div>
            </header>
        )
    }
}