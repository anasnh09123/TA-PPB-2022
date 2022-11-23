import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";

export default function Details() {
    const [data, setData] = useState();

    const { itemid } = useParams();
    useEffect(() => {
        fetch(
            `https://the-sneaker-database.p.rapidapi.com/sneakers/${itemid}`,
            {
                headers: {
                    'x-rapidapi-key': '853bcaa676mshede3557e4354fefp165b00jsn0b5325299dab'
                },
            }
        )
            .then((res) => res.json())
            .then((cats) => {
                setData(cats.results[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [itemid]);
    console.log(data);

    return (
        <div>
            {data === undefined
                ? "Loading..."
                :
                <div className="detail-container">
                    <img style={{ width: "60%", height: "60%", objectFit: "cover" }} src={data.image.small} alt="" />
                    <div className="detail-txt">
                        <p> {data.name} </p>
                        <p>Brand: {data.brand} </p>
                        <p>Colorway: {data.colorway} </p>
                        <p>{data.story}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}
