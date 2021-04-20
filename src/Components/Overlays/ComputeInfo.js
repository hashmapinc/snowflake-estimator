import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../../main.css';
import infoglyph from '../../information--v2.png';


const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Click "Snowflake Pricing" to see the credit cost for your region
    </Tooltip>
  );

const ComputeInfo = () => {
    return (
        <OverlayTrigger
          placement="right"
          delay={{ show: 200, hide: 200 }}
          overlay={renderTooltip}
        >
          <img src={infoglyph} alt="info" width="15px"/>
        </OverlayTrigger>
      )
}
  
export default ComputeInfo

