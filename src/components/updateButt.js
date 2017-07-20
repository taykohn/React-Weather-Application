import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { getPanelValues } from '../actions';
import { connect } from 'react-redux';


class UpdateButt extends Component {

    render() {
        return (
            <div className="update-butt">
                <Button bsStyle="primary"
                        onClick={this.props.getPanelValues}>
                    Update
                </Button>
            </div>
        );
    }
}

export default connect(null, { getPanelValues })(UpdateButt);
