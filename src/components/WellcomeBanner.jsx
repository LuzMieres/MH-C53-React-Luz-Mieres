import React, { useEffect, useState } from "react";
import axios from "axios";

const Hello = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/2")
            .then(response => {
                const clientData = response.data;
                setName(clientData.name);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <>    
            <p className="welcome">Welcome, {name}!</p>
            <img className="banner" src="src/assets/banner.jpg" alt="banner" />
        </>    
    );
};

export default Hello;