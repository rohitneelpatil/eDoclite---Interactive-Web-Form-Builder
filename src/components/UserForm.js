import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Panel, PageHeader, Grid, Row, Col, Accordion } from 'react-bootstrap';
import AddComponent from '../containers/AddComponent';
import ToolBox from './ToolBox';
import styles from '../styles/styles.less';
import EditForm from './EditForm'

/**
 * This class represents the main UI container for form builder application. It holds component toolbox, editor panel and builder form.
 */
@DragDropContext(HTML5Backend)
export default class UserForm extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={4} md={3}>
                      <Row>
                        <Accordion className={styles.sidepanelstyle}>
                            <Panel bsStyle="primary" collapsible defaultExpanded header="Drag Source" className={styles.panelstyle}>
                                <ToolBox />
                            </Panel>
                            <Panel bsStyle="primary" collapsible defaultExpanded header="Edit Element" className={styles.panelstyle}>
                                <EditForm />
                            </Panel>
                        </Accordion>
                      </Row>
                   </Col>
                   <Col xs={6} md={4} col-md-push-mdPush={5}>
                      <PageHeader>eDocLite</PageHeader>
                      <AddComponent />
                   </Col>
                </Row>
            </Grid>
        );
    }
}

export default UserForm