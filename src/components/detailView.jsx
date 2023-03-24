import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Link,Route,Routes,useParams,} from "react-router-dom";

const DetailView = () => {
    const{id} = useParams();
    const[data, setData] = useState({});

    useEffect(()=>{
        let query = `https://api.openbrewerydb.org/breweries/${id}`
        console.log(query)
        fetch(query).then((response)=> response.json()).then((data)=>{
            setData(data);
        })

    },[])

    return(
        <div className="detail-container">
            <table>
                <tr>
                    <td>Name: </td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>Brewery Type: </td>
                    <td>{data.brewery_type}</td>
                </tr>
                <tr>
                    <td>Address: </td>
                    <td>{`${data.street},  ${data.city},  ${data.state}, ${data.country}`}</td>
                </tr>
                <tr>
                    <td>Phone: </td>
                    <td>{data.phone}</td>
                </tr>

            </table>

        </div>

    );
};


export default DetailView;