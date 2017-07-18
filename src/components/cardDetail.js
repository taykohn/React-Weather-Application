import { Panel } from 'react-bootstrap';
import React from 'react';

const CardDetail = ({title, randomNumber, bsStyle}) => {
    return (
        <div>
            <Panel header={title} bsStyle="info" >
                {randomNumber}
            </Panel>
        </div>
    );
};

CardDetail.propTypes = { title: React.PropTypes.string };
CardDetail.defaultProps = { title: '' };

export default CardDetail;
