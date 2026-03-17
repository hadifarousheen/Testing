const Item=({product})=>{
    return(<div>
        <img src={product?.thumbnail}/>
        <h1>{product?.title}</h1>
         
    </div>)
}

export default Item;