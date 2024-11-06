import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList, addToStoredCartList, removeFromStoredWishList } from "../utilities/AddtoDB";
import WishItems from "./WishItems";

const WishList = () => {
    const [wishList, setWishList] = useState([]);

    
    const allProducts = useLoaderData() || [];

    useEffect(() => {
        if (Array.isArray(allProducts)) {
            const storedWishList = getStoredWishList();
            const storedWishListInt = storedWishList.map(id => parseInt(id, 10));
            const theWishList = allProducts.filter(product => storedWishListInt.includes(product.product_id));
            setWishList(theWishList);
        } else {
            console.error("Expected allProducts to be an array, but got:", allProducts);
        }
    }, [allProducts]);

    const handleAddToCart = (id) => {
        addToStoredCartList(id); 
    };

    const handleRemoveFromWishList = (id) => {
        removeFromStoredWishList(id); 

        setWishList((prevList) => prevList.filter(product => product.product_id !== id));
    };

    return (
        <section className="w-11/12 mx-auto my-12">
            <h1 className="text-2xl font-bold">Wish List</h1>
            <br />
            {wishList.map(product => (
                <WishItems 
                    key={product.product_id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                    onRemoveFromWishList={handleRemoveFromWishList} 
                />
            ))}
        </section>
    );
};

export default WishList;
