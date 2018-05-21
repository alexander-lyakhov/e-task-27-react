import React from 'react';
import baseComponent from '../base-component.jsx';

import './button-group.scss';

export default class ButtonGroup extends baseComponent
{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        this.setActiveButton(e.target);
        this.emit('onChange', e.target.getAttribute('data-action'));
    }

    setActiveButton(btn) {

        if (this.activeBtn) {
            this.activeBtn.classList.remove('active');
        }

        this.activeBtn = btn;
        this.activeBtn.classList.add('active');
    }

    componentDidMount() {
        this.setActiveButton(this.refs.btnGroup.children[0]);
    }

    render() {
        return (
            <ul className="btn-group noselect" onClick={this.clickHandler} ref="btnGroup">
                <li className="btn-group__item" data-action="nosort">No Sorting</li>
                <li className="btn-group__item" data-action="likes">By Likes</li>
                <li className="btn-group__item" data-action="stars">By Stars</li>
            </ul>
        )
    }
}