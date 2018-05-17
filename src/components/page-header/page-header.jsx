import React from 'react';
import baseComponent from '../base-component.jsx';

import './page-header.scss';

export default class PageHeader extends baseComponent
{
    constructor(props) {
        super(props);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    keyUpHandler(e) {
        this.emit('onSearch', e.target.value);
    }

    shouldComponentUpdate() {
    	return false;
    }

    componentDidMount() {
    	this.refs.txtSearch.focus();
    }

    render() {
        return (
            <header>
                <div className="header-area">
                    <div className="text-wrapper">
                        <input type="text"  ref="txtSearch" className="text-field" onKeyUp={this.keyUpHandler} />
                    </div>
                </div>
            </header>
        )
    }
}