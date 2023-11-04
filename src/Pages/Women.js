import { useEffect, useState } from "react";
import "./Women.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Watches = () => {
    const url = "https://api.escuelajs.co/api/v1/categories/2/products";
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
        <div className="men-container">
          {products.map((produk) => (
            <div className="col-3 mb-4 ">
                
            
            <Link
                to={`/Details/${produk.id}`}
            >
                <div className="men-grid" key={produk.id}>
                    <img className="men-img"
                        src={produk.images}
                        alt="" />
                    <p className="men-name">{produk.title}</p>

                </div>
            </Link>
        ;
    
</div>
              
           
          ))}
        </div>
      </div>
    );
  };
  
  export default Women;
