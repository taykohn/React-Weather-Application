import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { getRandomNumbers } from '../actions';
import { connect } from 'react-redux';


class UpdateButt extends Component {

    render() {
        return (
            <div className="update-butt">
                <Button bsStyle="primary"
                        onClick={this.props.getRandomNumbers}>
                    Update
                </Button>
            </div>
        );
    }
}

export default connect(null, { getRandomNumbers })(UpdateButt);
