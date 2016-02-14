/**
 * Created by parikhv on 1/31/16.
 */





import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactDom from 'react-dom';

import config from '../../../config/app';



/**
 * This is a description of the Form Class
 * @class
 * @classdesc This is a description of the Form class built using basic react implementation.
 */

class Form extends React.Component {


    shouldComponentUpdate() {
        return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    constructor () {
        super();
        this.state = {
            username: ""
        };
    }

/**
 * Represents a render function.
 * @constructor
 * @param {string} username - The username field.

 */

    render () {
        console.log(this);
        return <div className="input-group">
            <input type="text" className="form-control" placeholder="Enter Username.." aria-describedby="basic-addon2" onKeyPress={this.handleChange.bind(this)}></input>
            <span className="input-group-addon" id="basic-addon2">@edl.com</span>
            <p>{this.state.username}</p>
        </div>;
    }

    handleChange (e) {
        if (e.key === 'Enter') {
            //console.log(e.target.value);
            this.setState({username:e.target.value+"@edl.com"});
        }
    }
}

//Form.propTypes = {
//    state: React.PropTypes.object.isRequired
//};

module.exports =  Form;
