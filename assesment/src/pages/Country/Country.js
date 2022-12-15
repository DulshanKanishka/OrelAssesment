import React, {useEffect, useState} from "react";
import apiData from "../../services/apiService";
import {Table} from "react-bootstrap";
import classes from "./Country.module.css";


function Country() {
    const url = window.location.href;
    const lastSegment = url.substring(url.lastIndexOf("/") + 1);
    const [country, setCountry] = useState([]);

    // Get Specific countries by 3-letter code
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
        getCountry().then(r => []);
    }, [])

    // getcurrensy data
    let currency = "";
    if (country.length !== 0) {
        for (let key in country[0].currencies) {
            currency = country[0].currencies[key].symbol;
        }
    }

    return (
        <div className="container">
            <div className={classes.breadcromb_holder}>
                <p className={classes.breadcromb_txt_main}><span className={classes.breadcromb_txt_span}>Search</span> / {country.length === 0 ? '' : country[0].name.official}</p>
            </div>
            <p className={classes.country_title}>{country.length === 0 ? '' : country[0].name.official}</p>
            <div className="row specific-country-page-holder">
                <div className="contry-collumn-set col-12 col-md-6 col-lg-4">
                    <p>Names</p>
                    <Table bordered hover>
                        <tbody>
                        <tr>
                            <td>Common</td>
                            <td>{country.length === 0 ? '' : country[0].name.common}</td>
                        </tr>
                        <tr>
                            <td>Official</td>
                            <td>{country.length === 0 ? '' : country[0].name.official}</td>
                        </tr>
                        <tr>
                            <td>Common (Native)</td>
                            {/*<td>{country.length === 0 ? '' : country[0].name.nativeName.ara.common}</td>*/}
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Official (Native)</td>
                            {/*<td>{country.length === 0 ? '' : country[0].name.nativeName.ara.official}</td>*/}
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Alternative spellings</td>
                            <td>{country.length === 0 ? '' : country[0].altSpellings.join(", ")}</td>
                        </tr>
                        </tbody>
                    </Table>

                    <p>Codes</p>

                    <Table bordered hover>
                        <tbody>
                        <tr>
                            <td>ISO 3166-1 alpha-2</td>
                            <td>{country.length === 0 ? '' : country[0].cca2}</td>
                        </tr>
                        <tr>
                            <td>ISO 3166-1 alpha-3</td>
                            <td>{country.length === 0 ? '' : country[0].cca3}</td>
                        </tr>
                        <tr>
                            <td>ISO 3166-1 (numeric)</td>
                            <td>{country.length === 0 ? '' : country[0].ccn3}</td>
                        </tr>
                        <tr>
                            <td>International calling codes</td>
                            <td>{country.length === 0 ? '' : country[0].idd.root + country[0].idd.suffixes}</td>
                        </tr>
                        <tr>
                            <td>ISO 4217 currency code</td>
                            <td>{currency}</td>
                        </tr>
                        <tr>
                            <td>Top level domains</td>
                            <td>{country.length === 0 ? '' : country[0].tld.join(", ")}</td>

                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="contry-collumn-set col-12 col-md-6 col-lg-4">
                    <p>Language</p>
                    <Table bordered hover>
                        <tbody>
                        <tr>
                            <td>Native language</td>
                            {/*<td>{country.length === 0 ? '' : country[0].languages.join(", ")}</td>*/}
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            {/*<td>Mark</td>*/}
                            <td>-</td>

                        </tr>
                        <tr>
                            <td>sin</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>tam</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </Table>

                    <p>Geography</p>

                    <Table bordered hover>
                        <tbody>
                        <tr>
                            <td>Region</td>
                            <td>{country.length === 0 ? '' : country[0].region}</td>

                        </tr>
                        <tr>
                            <td>Subregion</td>
                            <td>{country.length === 0 ? '' : country[0].subregion}</td>

                        </tr>
                        <tr>
                            <td>Capital</td>
                            <td>{country.length === 0 ? '' : country[0].capital}</td>

                        </tr>
                        <tr>
                            <td>Demonym</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>Lat/Lan</td>
                            <td>{country.length === 0 ? '' : country[0].latlng.join(", ")}</td>

                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.length === 0 ? '' : country[0].area}</td>

                        </tr>
                        <tr>
                            <td>Land borders</td>
                            <td>{country.length === 0 ? '' : country[0].borders.join(", ")}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="contry-collumn-set contry-collumn-set-last col-12 col-md-12 col-lg-4">
                    <img src={country.length === 0 ? '' : country[0].flags.png} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Country;
