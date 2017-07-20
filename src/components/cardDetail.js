import { Panel } from 'react-bootstrap';
import React from 'react';

const CardDetail = ({title, value}) => {
    return (
        <div>
            <Panel header={title} bsStyle="info" >
                {value}
            </Panel>
        </div>
    );
};

CardDetail.propTypes = { title: React.PropTypes.string };
CardDetail.defaultProps = { title: '' };

export default CardDetail;
