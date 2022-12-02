import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Details.css";
import { NavLink } from "react-router-dom";


const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { itemid } = useParams();
 
    useEffect(() => {
        const getProduct = async () => {
          setLoading(true);
          const response = await fetch(`https://api.escuelajs.co/api/v1/products/${itemid}`);
          setProduct(await response.json());
          setLoading(false);
        };
        getProduct();
      }, [itemid]);
  
      const Loading = () => {
        return <>Loading....</>;
      };
    
      const ShowProduct = () => {
        return (
          <>
            <div className="detail-container">
              <img
                src={product.images}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="detail-container">
              <h1 className="detail-txt">{product.title}</h1>
              <h3 className="detail-txt">$ {product.price}</h3>
            <p className="detail-txt">
              Description:
              <br></br>
                {product.description}
              </p>
              <NavLink to="/home" className="btn btn-dark">Home</NavLink>
            </div>
          </>
        );
      };
    
      return (
        <div>
          <div className="detail-container">
            <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
          </div>
        </div>
      );
    };
    
    export default Product;
/*export default function Details() {
    const [data, setData] = useState();

    const { item } = produk.id;
    const url = 'https://api.escuelajs.co/api/v1/categories/4/products/${item.id}';
    const [products, setProducts] = useState([]);
    const getDataProducts = async () => {
      const response = await fetch(url);
      const dataProduct = await response.json();
      setProducts(dataProduct);
      console.log(products);
    };
  
    useEffect(() => {
      getDataProducts();
    }, []);

    return (
        <div>
            {data === undefined
                ? "Loading..."
                :
                <div className="detail-container">
                    <img style={{ width: "60%", height: "60%", objectFit: "cover" }} src={data.image.small} alt="" />
                    <div className="detail-txt">
                        <p> {data.title} </p>
                        <p>Price: {data.price} </p>
                        <p>{data.description}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}*/
