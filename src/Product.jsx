function Product(product) {
    return(
        <div>
            <h1>Product Name: {product.name}</h1>
            <h2>Price: ${product.price}</h2>
            <h2>Category: {product.category}</h2>
            <h2>Instock: {product.Instock} </h2>
        </div>
    )
}
export default Product;