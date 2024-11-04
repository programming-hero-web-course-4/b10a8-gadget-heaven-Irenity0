const Product = ({product}) => {
    const {} = product;

    return (
        <div key={product.product_id} className="p-4 border rounded space-y-2">
<div>
<img className="h-80 w-full" src={product.product_image} alt={product.product_title} />
</div>
<h2 className="text-xl font-semibold">{product.product_title}</h2>
<p>Price: ${product.price}</p>
<button className="btn btn-outline rounded-full px-10 font-bold border-2 border-purple-600">
Details
</button>
</div> 
    )
};

export default Product;


