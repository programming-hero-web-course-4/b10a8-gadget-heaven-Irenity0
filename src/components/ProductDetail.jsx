import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "react-rating-stars-component";
import productsInfo from "./data.json";
import { 
  addToStoredCartList, 
  removeFromStoredCartList, 
  addToStoredWishList, 
  getStoredWishList, 
  getStoredCartList 
} from "../utilities/AddtoDB";
import { Helmet } from 'react-helmet';

const MAX_CART_TOTAL = 1000;

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsInfo.find((p) => p.product_id === parseInt(productId, 10));

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const wishList = getStoredWishList();
    if (wishList.includes(product?.product_id)) {
      setIsInWishlist(true);
    }
    updateCart();
  }, [product]);

  const updateCart = () => {
    const cartList = getStoredCartList();
    setCartItems(cartList);
    const currentTotal = cartList
      .map((id) => productsInfo.find((item) => item.product_id === parseInt(id, 10))?.price || 0)
      .reduce((acc, price) => acc + price, 0);
    setCartTotal(currentTotal);
  };

  const handleAddToCart = (id) => {
    if (cartTotal + product.price > MAX_CART_TOTAL) {
      toast.error("Cannot add item: Cart total limit of $1000 reached!");
      return;
    }
    addToStoredCartList(id);
    toast.success("Product added to cart!");
    updateCart();
  };

  const handleRemoveFromCart = (id) => {
    removeFromStoredCartList(id);
    toast.success("Product removed from cart!");
    updateCart();
  };

  const handleAddToWish = (id) => {
    addToStoredWishList(id);
    setIsInWishlist(true);
    toast.success("Product added to wishlist!");
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Helmet>
        <title>{product.product_title} - Product Details</title>
        <meta name="description" content={`Details about ${product.product_title}`} />
      </Helmet>

      <div className="bg-purple-600 md:h-52 lg:h-96 relative">
        <div className="w-11/12 mx-auto">
          <br />
          <h1 className="text-4xl font-bold text-center">Product Details</h1>
          <p className="text-center">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the
            coolest accessories, we have it all!
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto p-6 lg:absolute lg:left-40 lg:bottom-8">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-96 w-auto" src={product.product_image} alt={product.product_title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-4xl">{product.product_title}</h2>
            <p className="font-semibold text-2xl">Price: ${product.price}</p>
            <div className="card-actions">
              <span className="rounded-full border-green-600 text-green-700 font-semibold border-2 py-1 px-2 bg-green-600/30">
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <p>{product.description}</p>
            <div className="text-lg mb-2">
              <strong>Specifications:</strong>
              <ul className="list-disc ml-6">
                <li><strong>Processor:</strong> {product.specifications.processor}</li>
                <li><strong>RAM:</strong> {product.specifications.ram}</li>
                <li><strong>Storage:</strong> {product.specifications.storage}</li>
                <li><strong>Screen Size:</strong> {product.specifications.screen_size}</li>
              </ul>
            </div>
            <div className="text-lg mb-2">
              <strong>Rating:</strong>
              <Rating
                count={5}
                size={24}
                value={product.rating}
                edit={false}
                isHalf={true}
                activeColor="#ffd700" // Star color
              />
            </div>
            <div className="card-actions justify-start">
              <button onClick={() => handleAddToCart(product.product_id)} className="btn btn-outline rounded-full border-purple-600 border-2">Add To Cart</button>
              <button onClick={() => handleAddToWish(product.product_id)} className="btn btn-outline rounded-full border-purple-600 border-2" disabled={isInWishlist}>
                <i className="fa-regular fa-heart"></i> {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="h-72"></div>
    </>
  );
};

export default ProductDetail;
