import React from 'react';
// now we are also converting this to a functiona component as it does not have any state 

const Cartitem=(props)=>{

    //   we will use this state in cart as we can use props now for accessing the properties

    // constructor(){
    //     super();
    //     this.state = {
    //         price:999,
    //         title: 'Mobile Phone',
    //         Qty : 1,
    //         img: ''


    //     }
    //    // this.increaseQuantity=this.increaseQuantity.bind(this);
    // }

         // this function will not work as we have removed the state form here to cart.js

    // increaseQuantity = () =>{
       // this.state.Qty += 1;
       // this will not increase the state on UI bcz react does not understand this 

       

        // we are using the react inbuit func setState which is inherited from reactComponent

        //setState form 1
        // this.setState({
        //     Qty: this.state.Qty+1
        // });

        // setState form2-if previous state is required we will use this 
        // this.setState((prevState)=>{
        //     return{
        //         Qty:prevState.Qty+1
        //     }
        // },()=>{
        //     console.log('this',this.state);
        // });
        


        
    // }
     // this function will not work now as we have removed the state from here to cart.js
    // decreaseQuantity = () =>{
    //     // Using setState form-2 because previous state is required in this 
    //     if(this.state.Qty>0){
    //     this.setState((prevState)=>{
    //         return{
    //             Qty:prevState.Qty-1
    //         }

    //     },()=>{
    //         console.log('this',this.state);
    //     });
    // }
    // }

    
        //console.log('this.props',this.props);
        console.log('render')
        
    const{price,title,Qty} =props.product;//here product is the array used in cart.js
    const{product,
        onDecreaseQuantity,
        onIncreaseQuantity,
        onDelete
        }=props;
    return(
    <div className = "cart-item">
    <div className = "left-block" >
    <img style={styles.image} src={product.img}/>
                    

    </div>
                
    <div className = "right-block">
    <div style={ {fontSize:25} }> {title}</div>
    <div style ={ {color:'#777'} }> Rs {price}</div>
    <div style = { {color:'#777'} }> Qty:{Qty}</div>
    <div className="cart-item-actions">
    {/* this will be buttons for specific actions */}
    <img alt="increase" className = "action-icons" src ="https://www.flaticon.com/svg/static/icons/svg/929/929409.svg"
    // here we are calling the function and passing the perticulae/required argument to the function 
    onClick={ ()=> onIncreaseQuantity(product)}
    />
    <img alt="delete" className = "action-icons" src= "https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
    onClick={()=>onDelete(product.id)}
    />
    <img alt = "decrease" className = "action-icons" src= "https://as2.ftcdn.net/jpg/03/51/18/85/500_F_351188596_rBQwfSx3MgDI1RhmyrJcVGFfP4lVg1VN.jpg" 
    onClick = {()=> onDecreaseQuantity(product)}
    />
    </div>


        </div>

        </div>
        )
    }

const styles = {
    image : {
        height : 110,
        width: 110,
        borderRadius: 4,
        background :'#ccc'
    }
}
export default Cartitem;