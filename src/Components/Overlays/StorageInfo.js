import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import '../../main.css';
import {AiFillInfoCircle} from "react-icons/ai";


const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Click "Snowflake Pricing" to see the storage cost for your region
    </Tooltip>
  );

const StorageInfo = () => {
    return (
        <OverlayTrigger
          placement="right"
          delay={{ show: 200, hide: 200 }}
          overlay={renderTooltip}
        >
          <AiFillInfoCircle size="1rem"/>
        </OverlayTrigger>
      )
}
  
export default StorageInfo