import { useParams } from "react-router-dom";
import productsInfo from "./data.json";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsInfo.find((p) => p.product_id === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
    <div className="bg-purple-600 h-96 relative">
        <div className="w-11/12 mx-auto">
            <br />
            <h1 className="text-4xl font-bold text-center">Product Details</h1>
            <p className="text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
    </div>

    <div className="w-10/12 mx-auto p-6 absolute left-40 bottom-8">
          <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-auto w-auto" src={product.product_image} alt={product.product_title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-4xl">{product.product_title}</h2>
            <p className="font-semibold text-2xl">Price: ${product.price}</p>
            <div className="card-actions">
            <span className="rounded-full border-green-600 text-green-700 font-semibold border-2 py-1 px-2 bg-green-600/30">{product.availability ? "In Stock" : "Out of Stock"}</span>
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
          <p className="text-lg"><strong>Rating:</strong> {product.rating} / 5</p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline rounded-full border-purple-600 border-2">Add To Cart</button>
              <button className="btn btn-outline rounded-full border-purple-600 border-2"><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
        </div>
        </div>
        <div className="h-72"></div>
    </>
  );
};

export default ProductDetail;  