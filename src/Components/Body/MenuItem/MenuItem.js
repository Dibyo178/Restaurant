import React from 'react';
import {
    Card, CardBody, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';
import '../MenuItem/MenuItem.css';
  
const MenuItem = (props) => {
    const  {image,name} =props.dish;
//    console.log(props)
    return (
        <div className="container">
            <Card style={{margin:'10px'}}>
                
                <CardBody>
                    <CardImg 
                    style={{opacity:0.5}}
                    width="100%" 
                     alt={props.name} 
                     src={image}
                     
                     />
                    <CardImgOverlay>
                         <CardTitle 
                       /* onDishSelect={()=>props.onDishSelect(props.dish)}*/  //binding
                        onClick={props.onDishSelect} 
                         style={{cursor: 'pointer'}} 
                         tag="h5">{name}</CardTitle>
                    </CardImgOverlay>
                    
                </CardBody>
                 </Card>
                </div>
       
    );
};

export default MenuItem;