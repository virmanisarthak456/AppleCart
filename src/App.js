import React from 'react';

// import Cartitem from './Cartitem';

import Cart from './Cart';

import Navbar from './Navbar'


import firebase from 'firebase/app'



class App extends React.Component {
  constructor(){
    super();
    // now we have to cll firebase.firestore again and again there fore we are creating it here 
    this.db = firebase.firestore();
    this.state = {
        // now we want to have  a number of products in this therefore we are using array

        // making products an empty array bcz we will fetch out data from DB that is firebase
        // sice it is taking few seconds to load the page after refreshing therefor we are adding loader
        products:[
        //     {
        // price:999,
        // title: 'Mobile Phone',
        // Qty : 1,
        // img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
        // id:'1'
        //     },

        //     {
        //     price:200,
        //     title:'watch',
        //     Qty :1,
        //     img : 'https://images.unsplash.com/photo-1530508943348-b8f606ea2bf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        //     id:'2'
        //     }

        ],loading : true


    }
   // this.increaseQuantity=this.increaseQuantity.bind(this);
}

// now we are using the lyfcycle of the componenet of that is componennt did mount

componentDidMount (){
// // we are doing function chaining here 
// firebase.
// firestore().
// collection('products').
// get().// get here will return a promise 
// then((snapshot)=>{
//   console.log('snapshot',snapshot);
//   // now we have seen that the snapshot is an array in console so we can map over it or iterate over it 
//   snapshot.docs.map((doc)=>{
//     console.log(doc.data());
//   });
//   const products=snapshot.docs.map((doc)=>{
//     const data = doc.data();
//     data['id']=doc.id;
//     return data;

//   });

//   this.setState({
//     // reaching this stage means we fetched the data from db 
//     products:products,
//     loading:false
//   })
// });

// we used onsSnapshot here as we can directly fetch data from db if there is ay change in db 

this.db
.collection('products').
onSnapshot((snapshot)=>{
  console.log('snapshot',snapshot);
  // now we have seen that the snapshot is an array in console so we can map over it or iterate over it 
  snapshot.docs.map((doc)=>{
    console.log(doc.data());
  });
  // the below function is updating the data changed in db 
  const products=snapshot.docs.map((doc)=>{
    const data = doc.data();
    data['id']=doc.id;
    return data;

  });

  this.setState({
    // reaching this stage means we fetched the data from db 
    products:products,
    loading:false
  })
})
}




HandleDecreaseQuantity=(product) =>{
  // now we have to update the decrease quantity in firebase therefore we are commenting this
   // console.log('decrease',product);
    const{products} =this.state;
    //console.log('decrease quantity',product);
    const Index = products.indexOf(product);
    // finding the index of the prop
    // if (products[Index].Qty>0) {
    //     products[Index].Qty -=1;
    // }
    // //products[Index].Qty +=1;
    // this.setState({
    //     products:products
    // })
    const docRef= this.db.collection('products').doc(products[Index].id);
    if(products[Index].Qty>0){
    docRef.update({
      Qty:products[Index].Qty-1
    })// since it will return a promise therefore we have to use .then()
    .then(()=>{
      console.log(' Decrease quantity updated in firebase');
    }).catch((error)=>{
      console.log('error',error);
    });
  }
}
HandleIncreaseQuantity=(product)=>{

console.log('increase Quantity',product);

// now we are updating the update quantity in firebase directly therefore we are commenting this

 const {products}= this.state;
// // finding the index of the producct from the products array 
 const Index = products.indexOf(product);
// // now changing the property of that array at a perticular index
// products[Index].Qty +=1;
// this.setState({
//     // updating the array of that index
//     products:products
// })
// now we are updatig the Qty via docRef
const docRef = this.db.collection('products').doc(products[Index].id);
docRef.update({
  Qty:products[Index].Qty+1
  
})// as this will return a promise therefore we will use .then()
.then(()=>{
  console.log(' Increase qunatity updated in firebase');

}).// adding a call back here for catching the errors 
catch((err)=>{
  console.log('error',err);
});

}

HandleDelete = (id)=>{
   //console.log('delete');
   const{products}=this.state;

   // now we are storing items whoes id is != to the requred id
  //  const items = products.filter((item)=> item.id!==id);
  //  console.log('deleted');
  //  this.setState({
  //      products:items
  //  })

// we are writing id over here instead of products[Index].id bcz in argument the we are recieving the id
const docRef = this.db.collection('products').doc(id);
docRef.delete()
.then(()=>{
  console.log('deleted from the firebase');
}).catch((error)=>{
  console.log('Error',error);
})
}
getCartCount = ()=>{
  const {products}= this.state;
  let count =0
  products.forEach((product) => {
    count +=product.Qty;
  });
  return count;

}
getToatalprice=()=>{
  const{products}= this.state;
  let sum=0;
  products.map((product)=>{
    sum=sum+product.Qty*product.price;

  });
  return sum ;
}
addProduct=()=>{
  this.db.collection('products')
  .add({
    img:'https://images-na.ssl-images-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg',
    price:9999,
    Qty:1,
    title:'AirPods'
    // we will get the refrence of the above object in the firebase(promise.then)
  }).then((docRef)=>{
    console.log('the new product is added',docRef);


  }).catch((error)=>{
    console.log('Error',error);
  });
}

addProduct1=()=>{
  this.db.collection('products').add({
    img:'https://specials-images.forbesimg.com/imageserve/5f960f4dfffddf07fd19dfe0/960x0.jpg?fit=scale',
    price:59999,
    Qty:1,
    title:'iphone'

  }).then((docRef)=>{
    console.log('new product is added',docRef);
  }).catch((error)=>{
    console.log('error',error);
  });
}
addProduct2=()=>{
  this.db.collection('products').add({
    img:'https://www.indianq.com/wp-content/uploads/2020/02/Apple-iwatch-5-Series-Watches-1.jpg',
    price:25999,
    Qty:1,
    title:'iWatch'

  }).then((docRef)=>{
    console.log('new product is added',docRef);
  }).catch((error)=>{
    console.log('error',error);
  });
}
addProduct3=()=>{
  this.db.collection('products').add({
    img:'https://5.imimg.com/data5/TV/FB/MY-73596578/voy-ex007-earphones-with-mic-500x500.jpeg',
    price:1499,
    Qty:1,
    title:'Apple earphones'

  }).then((docRef)=>{
    console.log('new product is added',docRef);
  }).catch((error)=>{
    console.log('error',error);
  });
}

addProduct4=()=>{
  this.db.collection('products').add({
  img:'https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SX679_.jpg',
  price:99999,
  Qty:1,
  title:'Macbook'

  }).then((docRef)=>{
  console.log('new product is added',docRef);
  }).catch((error)=>{
  console.log('error',error);
  });
}

  render(){
    // addding the loader over here
    const{products,loading}=this.state;
  return (
    <div className="App">
      {/* now we are passing count to navbar as props */}
     <Navbar count={this.getCartCount()}/>
<button onClick={this.addProduct} style={{padding:10,fontSize:10,backgroundColor:'black',borderRadius:20}} ><h2 style={{color:'white'}}>Add Airpods</h2></button>
<button onClick={this.addProduct1} style={{padding:10,fontSize:10,backgroundColor:'black',borderRadius:20}} ><h2 style={{color:'white'}}>Add iPhone</h2></button>
<button onClick={this.addProduct2} style={{padding:10,fontSize:10,backgroundColor:'black',borderRadius:20}} ><h2 style={{color:'white'}}>Add iWatch</h2></button>
<button onClick={this.addProduct3} style={{padding:10,fontSize:10,backgroundColor:'black',borderRadius:20}} ><h2 style={{color:'white'}}>Add Earphones</h2></button>
<button onClick={this.addProduct4} style={{padding:10,fontSize:10,backgroundColor:'black',borderRadius:20}} ><h2 style={{color:'white'}}>Add Macbook</h2></button>

     < Cart 
     products = {products}
     // now we have to pass all the functionalities to cart.js via props therefore copying it here 
     onIncreaseQuantity = {this.HandleIncreaseQuantity}
     onDecreaseQuantity = { this.HandleDecreaseQuantity}
     onDelete = {this.HandleDelete}
    />
    {loading&&<h1>Loading products...</h1>}
    <div style={{padding:10,fontSize:20}}> TOTAL:{this.getToatalprice()} </div>
    </div>
  );
  }
}

export default App;
