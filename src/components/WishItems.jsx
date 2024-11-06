const WishItems = ({ product, onAddToCart, onRemoveFromWishList }) => {
  return (
      <div className="card lg:card-side bg-base-100 shadow-2xl">
          <figure>
              <img className="h-72" src={product.product_image} alt="Album" />
          </figure>
          <div className="card-body">
              <h2 className="card-title text-2xl">{product.product_title}</h2>
              <p>{product.description}</p>
              <p className="text-xl font-semibold">Price: {product.price}</p>
              <div>
                  <button
                      className="btn text-white bg-purple-500 rounded-full px-4"
                      onClick={() => {
                          onAddToCart(product.product_id); 
                          onRemoveFromWishList(product.product_id);
                      }}
                  >
                      Add to Cart
                  </button>
              </div>
              <div className="card-actions justify-end">
                  <button className="btn btn-outline border-2 border-red-500 text-red-500 rounded-full" onClick={() => onRemoveFromWishList(product.product_id)}>X</button>
              </div>
          </div>
      </div>
  );
};

export default WishItems;
