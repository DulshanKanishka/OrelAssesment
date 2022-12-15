import React, {useEffect, useState} from "react";
import apiData from "../../services/apiService";


function Country() {
    const url =  window.location.href;
    const lastSegment = url.substring(url.lastIndexOf("/") + 1);
    const [country, setCountry] = useState([]);

    const getCountry = async () => {
        try {
            await apiData.searchCountryFromApi(lastSegment).then((data) => {
                setCountry(data);
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCountry();
    }, [])
    console.log('Country')
    console.log(country)
    console.log('Country')
    return (
        <div>fdgdf ghdfgh dfgh dfghd ghd fdghd fgdfghd ghdgh </div>
    );
}

export default Country;
