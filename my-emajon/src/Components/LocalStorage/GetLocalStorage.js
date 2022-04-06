

const GetLocalStorage = (id) => {
    console.log(id)
    let newData ={}
    const exits =localStorage.getItem("Shopping-cart")
    if(exits){
        newData =JSON.parse(exits)
    }
    console.log(exits)
    const quantity = newData[id]
    
     if(quantity){
       const  newQuantity = quantity + 1;
       newData[id]= newQuantity
   }else{
    newData[id]= 1
   }
   console.log(quantity)
   localStorage.setItem("shopping-cart", JSON.stringify(newData))
};

export default GetLocalStorage;