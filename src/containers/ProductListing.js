import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListing = () => {
  //Redux state is being used therefore,we don't need to
  //pass product as a prop
  const products = useSelector((state) => state);

  //Using dispatch hook
  const dispatch = useDispatch();

  //defining a fetchProducts to get the data from fakestore api
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    //We're passing data our action,this will return the setProducts object
    dispatch(setProducts(response.data));
  };

  //using useEffect to run our side-effect function
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('Products',products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
