const CartItems = ({ product, onRemove }) => {
  return (
      <div className="card lg:card-side bg-base-100 shadow-2xl">
          <figure>
              <img className="h-72" src={product.product_image} alt={product.product_title} />
          </figure>
          <div className="card-body">
              <h2 className="card-title text-2xl">{product.product_title}</h2>
              <p>{product.description}</p>
              <p className="text-xl font-semibold">Price: ${product.price}</p>
              <div className="card-actions justify-end">
                  <button onClick={() => onRemove(product.product_id)} className="btn btn-outline border-2 border-red-500 text-red-500 rounded-full">X</button>
              </div>
          </div>
      </div>
  );
};

export default CartItems;
