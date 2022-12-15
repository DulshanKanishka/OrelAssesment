import React, {useState, useEffect} from "react";
import apiData from "../../services/apiService";
import {Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import classes from "../../Layout/Header/Header.module.css";
import searchico from '../../Images/search.png';
import {Link} from "react-router-dom";

function Home() {

    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        try {
            await apiData.getCountriessFromApi().then((data) => {
                setCountries(data);
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCountries();
    }, [])
    console.log('Country')
    console.log(countries)
    console.log('Country')

    return (
        <div className="container">
            <h1>Search for a country</h1>
            {/*{countries.map(function (country, id) {*/}
            <Form.Control size="sm" type="text" placeholder="enter country name"/>
            <Row xs={1} md={3} className="g-4">
                {/*{countries.map(function (country, id) {*/}
                {Array.from(countries).map((country, id) => (
                    <Col Key={id}>
                        <Card>
                            <Card.Header>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p>{country.name.official}</p>
                                        <p>{country.name.common}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <a className={classes.aboutLink} href={"/country?country=" + country.cca3}>
                                            <img src={searchico} alt=""/>
                                        </a>
                                        <Link component="country" to={"/country/" + country.cca3}>
                                            Read doc
                                        </Link>;
                                    </div>
                                </div>
                            </Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>Country Code (Alpha 2)</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{country.cca2}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>Country Code (Alpha 3)</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{country.cca3}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>Currency</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>USD</p>
                                            {/*<p>{for (let key in country.currencies) {*/}
                                            {/*    country.currencies[key].name */}
                                            {/*}*/}
                                            {/*}</p>*/}
                                        </div>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>int. dial code</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{country.idd.root}{country.idd.suffixes}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <p>Language</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>eng</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    // })}
                ))}
            </Row>
        </div>
    );
}

export default Home;
