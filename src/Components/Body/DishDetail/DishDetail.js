import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import LoadComment from '../../LoadComment/LoadComment';
const DishDetail = (props) => {
//    console.log(props)
    const{image,name,price,description,label}=props.dish;
    return (
        <div>
            <Card>
                <CardImg src={image} alt={name}/>
              <CardBody style={{textAlign:'left',}}>
            <CardTitle> <h4>{name} </h4></CardTitle>
            <CardText>
            <p>{description}</p>
                <p>Price:{price}/=</p>
            </CardText>
            <hr/>
           <h2><u>Customer review</u></h2>
            <LoadComment key={props.dish.id} comments={props.dish.comments}/>
              </CardBody>
               
            </Card>
        </div>
    );
};

export default DishDetail;