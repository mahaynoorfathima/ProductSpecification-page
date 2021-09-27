import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card} from 'react-bootstrap';
const specification =()=>{
    return(
        // <Card border="3"  style={{ width: '85%' ,flexDirection:'row' ,margin:'100px',borderwidth: '3px !important'}}>
<Card border="1" border-radius=" 0px" style={{ width: '98%' ,flexDirection:'row' ,borderwidth: '3px !important'}}  >
<Card.Body>
<Card.Title style={{fontFamily:'Roboto',fontSize:'16'}}><strong>Book Description</strong></Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>(No description available for this product.) </Card.Title>
</Card.Body>
</Card>
    );
}
export default specification;