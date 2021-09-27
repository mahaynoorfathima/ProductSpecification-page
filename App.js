import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Rate from './components/Rating';
import Share from './components/search';
import Heart from './components/Cause_host';
import {Card} from 'react-bootstrap';
import Specification from './components/specification';
import Specification1 from './components/specification1';
import Specification2 from './components/specification2';
class App extends Component {
  render() {
  return (
    <div>
           <NavBar />
           <Card border="1"  style={{ width: '95%' ,flexDirection:'row' ,margin:'20px',borderwidth: '3px !important',backgroundColor:'FFFBF7'}}>
           <Card.Title style={{marginLeft:'10px'}}>
             <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br/><br/><br/><br /> <br /><br /> <br /> <br />  <br /><br /> <br /><br /> <br /><br /><br /><br />
    <Share/>
     </Card.Title>
     <Card.Title>
             <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br/><br/><br/><br /> <br /><br /> <br /> <br />  <br /><br /> <br /><br /> <br /><br /><br /><br />
  <h4>Share</h4>
     </Card.Title>
    <Card.Title  border="1" style={{width :'50%', borderwidth: '3px !important'}}>
      <img  style={{width :'80%' ,padding:'10px',marginTop:'50px'}} alt="book" src="https://cdn01.sapnaonline.com/product_media/5551234002674/md_5551234002674.jpg "></img>
    </Card.Title>
   <Card.Title>
  <Heart/>
     </Card.Title>
    <Card border="1" style={{width :'65%', borderwidth: '3px !important', height:'100%'}}>
    <Card.Title >
     <h5  style={{ fontFamily:'Roboto',fontSize:'12px',color:'#2C308B'}}> Home  Academics  PU Board  PUC1 Hindi</h5>
    </Card.Title>
      <Card.Title ><h1  style={{ fontFamily:'Roboto',fontSize:'30px'}}><strong>Hindi 1st Puc Sahitya Vaibhav Patyapustak Abyas Pustak : Mccs Master Companion Series</strong></h1>
      <h3  style={{ fontFamily:'Roboto',fontSize:'14px'}}> by Na (Author), Mcc Publications (Publisher)</h3>
      </Card.Title>
    <Card.Title >
      <Rate />
       </Card.Title>
       <Card border="1" border-radius=" 0px" style={{ width: '100%' ,flexDirection:'row' ,borderwidth: '3px !important'}}  >
<Card.Body>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'16',color:'#2C308B'}}><strong>₹140</strong></Card.Title>
  <Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}>Inclusive of all taxes</Card.Title>
  <br />
  <button style={{backgroundColor:"#FFFBF7"}}><Card.Title  style={{fontFamily:'Roboto',fontSize:'12',backgroundColor:"FFFBF7"}}>ADD TO CART</Card.Title></button>
</Card.Body>
<Card.Body>
<Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}> Qty
<select style={{background:'white',width:'65px'}}>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
</Card.Title>
<Card.Title style={{fontFamily:'Roboto',fontSize:'14',color:'#2C308B'}}> Buying in bulk?</Card.Title>
<br />
<button style={{backgroundColor:"#FFFBF7"}}><Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}>BUY NOW</Card.Title></button>
</Card.Body><br/>
<Card border="1" border-radius=" 0px" style={{ width: '50%' ,flexDirection:'row' ,borderwidth: '3px !important'}}  >
<Card.Body>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'16',color:'#2C308B'}}><strong>Check Delivery</strong></Card.Title>
  <Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}><input placeholder="enter pin code" style={{width:'130px'}}></input><button style={{backgroundColor:"#FFFBF7"}}>search</button></Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>Enter pincode for exact delivery dates / charges and to know if express delivery is available</Card.Title>
  <button style={{backgroundColor:"#FFFBF7"}}><Card.Title  style={{fontFamily:'Roboto',fontSize:'12'}}>Check Availibility at Stores click here</Card.Title></button>
</Card.Body>
</Card>
</Card>
<Card border="1" border-radius=" 0px" style={{ width: '52.5%' ,flexDirection:'row' ,height:'100%', borderwidth: '3px !important'}}  >
<Card.Body>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'16',color:'#2C308B'}}><strong>Offers on the product</strong></Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>Coupon Code: AWESOME10</Card.Title>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>Get 10% off on minimum order of Rs 500 (max discount Rs 75). View Terms.</Card.Title>
</Card.Body>
</Card>
<Card border="1" border-radius=" 0px" style={{ width: '52.5%' ,flexDirection:'row' ,borderwidth: '3px !important'}}  >
<Card.Body>
  <Card.Title style={{fontFamily:'Roboto',fontSize:'12',color:'#2C308B'}}>FOR MORE DETIALS</Card.Title>
</Card.Body>
<Card.Body>
 <button style={{backgroundColor:"#FFFBF7",width:'100px'}}> <Card.Title style={{fontFamily:'Roboto',fontSize:'12'}}>Click Here</Card.Title></button>
</Card.Body>


</Card>

       </Card>
   
    <br />
   
  </Card>
  
  <br />
  
  <br />
<div style={{margin:'20px'}}><Specification/><Specification1/><Specification2/></div>
  
  <br />
      </div>

      
  );
}
}
export default App;
