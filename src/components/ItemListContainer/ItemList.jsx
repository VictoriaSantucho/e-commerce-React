import Item from "./Item"

const ItemList = ({products} ) => {
    
    return (
        <div className="itemList">
            {products.map((product) => (
                <div  key={product.id}>
                    <Item product={product}/>    
                </div>
            ))}
        </div>
    )
}

export default ItemList