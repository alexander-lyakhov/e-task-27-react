import React from 'react';
import baseComponent from '../base-component.jsx';

import './landing-page.scss';

export default class LandingPage extends baseComponent
{
    constructor(props) {
        super(props);
        console.log('props', props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('this.props', nextProps);
    	return nextProps.show;
    }

    render() {
        let {Boolean(show)} = this.props;

        return (
        	<div className={'landing-page' + show && ' show'}>
        		<div className="overlay"></div>

        		<div className="landing-page__container">
        			<div className="landing-page__content">
                		<div className="landing-page__header">
                		</div>

                		<img src="https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg" width="320" />

                		<section className="info">
                			<h2>The Shawshank Redemption. The Shawshank Redemption</h2>

                			<div className="row">
            	    			<label className="caption">Likes:</label>
                				<div className="value">22</div>
                			</div>

                			<div className="row">
                    			<label className="caption">Ganres:</label>
                    			<div className="value">fantasy</div>
                			</div>

                			<div className="row">
                    			<label className="caption">Actors:</label>
                    			<div className="value">Tim Robbins, Morgan Freeman, Bob Gunton</div>
                			</div>

                			<div className="row">
                    			<label className="caption">Director:</label>
                    			<div className="value">Frank Darabont</div>
                			</div>

                			<div className="row">
                    			<label className="caption">description:</label>
                       			<div className="value">Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.</div>
                			</div>
                		</section>
        			</div>
        		</div>
        	</div>
        )
    }
}