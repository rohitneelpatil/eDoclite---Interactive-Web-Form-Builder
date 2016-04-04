import React, {  PropTypes, Component } from 'react';
import { Panel, Grid, Row, Col, Input, Button, ButtonToolbar} from 'react-bootstrap';
import styles from '../styles/styles.less';
import {reduxForm} from 'redux-form';
import ComponentContainer from '../components/ComponentContainer'
import { connect } from 'react-redux'
import { editComponent } from '../actions'
import EditForm from './EditForm'

/**
 * This class represents the container for editor panel redux form. It generates form for editing compnent properties dynamically.
 */
export default class EditFormContainer extends Component {

    render() {
        const {component, selectedComponent } = this.props;

        if (selectedComponent != -1) {

            return (

                <div>
                    <EditForm fields={ Object.keys(component.props) } selectedComponent={ selectedComponent }/>

                </div>
            );
        }
        else {
            return (<div />);
        }

    }
}


/**
 * Returns the selected component and selected component id
 */
const mapStateToProps = (state) => {
    if(state.components.selectedComponent != undefined){
      return {
        component: state.components.componentArray[state.components.selectedComponent],
        selectedComponent : state.components.selectedComponent
      }
    }else{
      return {component: {}, selectedComponent: -1};
    }
};

EditFormContainer = connect(mapStateToProps)(EditFormContainer);

export default EditFormContainer;