import React, { Component } from 'react'
import DISHES from '../../Data/dish'
import DishDetail from '../DishDetail/DishDetail'
import MenuItem from '../MenuItem/MenuItem'

 class Menu extends Component {
     state={
         dishes:DISHES,
         selectedDish:null
     }

     onDishSelect=(dishes)=>{
        // console.log(dishes)
         this.setState({selectedDish:dishes});
     }
    render() {
        const menu =this.state.dishes.map(item=>
        <MenuItem 
        // onDishSelect={this.onDishSelect}
        onDishSelect={()=>this.onDishSelect(item)} //binding
          dish={item} 
          key={item.id}>
          </MenuItem>)

        let dishDetail=null;
        if(this.state.selectedDish!=null){
            dishDetail=<DishDetail dish={this.state.selectedDish}></DishDetail>
        }
        return (
            
            <div className='container'>
                <div className="row">
                    <div className="col-6">
                        {menu};
                        
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
