
import { useEffect, useState } from "react";
import "./Men.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Men(props) {
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
                    "https://the-sneaker-database.p.rapidapi.com/sneakers",
                    {
                        params: {
                            'limit': '12',
                            'gender': 'men',
                            'sort': '"sku":"desc"'
                        },
                        headers: {
                            'x-rapidapi-key': '251c3a5c77mshac5d7391692f428p16d82fjsnc3079716cbb4'
                        },
                    }
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
                {data.map((item, index) => {
                    return (
                        <Link
                            to={`/Details/${item.id}`}
                        >
                            <div className="men-grid" key={index}>
                                <img className="men-img"
                                    src={item.image.thumbnail}
                                    alt="" />
                                <p className="men-name">{item.name}</p>

                            </div>
                        </Link>
                    );
                })}
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
            
            {isLoading ? (
                <div className="text-white text-center mb-3">Loading...</div>
            ) : (
                <div className="container gifs mb-3">{renderList()}</div>
            )}
        </div>
    );
};
export default Men;
