import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card} from 'react-bootstrap';
const specification =()=>{
    return(
        // <Card border="3"  style={{ width: '85%' ,flexDirection:'row' ,margin:'100px',borderwidth: '3px !important'}}>
     
<Card border="1" border-radius=" 0px" style={{ width: '98%' ,flexDirection:'row' ,borderwidth: '3px !important'}}  >
<Card.Body>
  <li><Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}><strong>ISBN-13</strong></Card.Title></li>
  <li><Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}><strong>Language</strong></Card.Title></li>
  <li><Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}><strong>Binding</strong></Card.Title></li>
  <li><Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}><strong>Publisher</strong></Card.Title></li>
</Card.Body>
<Card.Body>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}> <h5>5551234002674 </h5></Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}> <h5> English</h5> </Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>   Paper Back </Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>   Mcc Publications </Card.Title>
</Card.Body>

<Card.Body>
<Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}><li><strong>Publishing Date</strong></li> </Card.Title>
<li><Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}><strong>Product Edition</strong></Card.Title></li>
</Card.Body>
<Card.Body>
<Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}> 2014 </Card.Title>
<Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>  1</Card.Title>
</Card.Body><br/>

</Card>
    );
}
export default specification;