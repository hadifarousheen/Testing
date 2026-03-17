const Item=({product})=>{
    return(<div className="px-2 py-4">
        <img src={product?.thumbnail}/>
        <h1 className="flex justify-center text-xl font-semibold">{product?.title}</h1>
         
    </div>)
}

export default Item;