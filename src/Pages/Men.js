
import { useEffect, useState } from "react";
import "./Men.css";

import { Link } from "react-router-dom";

const Men = () => {
    const url = "https://api.escuelajs.co/api/v1/categories/4/products";
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
  
  export default Men;
/*function Men(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    console.log(data)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(
                    "https://api.escuelajs.co/api/v1/categories/4/products"
                );
                setData(result.data.results)
            } catch (err) {
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    console.log(data);
    const renderList = () => {
        return (
            <div className="men-container">
            
                        <Link
                            to={`/Details/${item.id}`}
                        >
                            <div className="men-grid" key={id}>
                                <img className="men-img"
                                    src={category.image}
                                    alt="" />
                                <p className="men-name">{title}</p>

                            </div>
                        </Link>
                    ;
                
            </div>
        );
    };

    const renderError = () => {
        if (isError) {
            return (
                <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                >
                    Unable to Get data, Please try again next time
                </div>
            );
        }
    };

    return (
        <div className="random-page d-flex flex-column align-items-center">
            {renderError()}
            <h1 className="txt">Sneakerzz</h1>
            {isLoading ? (
                <div className="text-white text-center mb-3">Loading...</div>
            ) : (
                <div className="container gifs mb-3">{renderList()}</div>
            )}
        </div>
    );
};
export default Men;*/
