import React, {useState, useEffect} from "react";
import apiData from "../../services/apiService";
import {Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import classes from "./Home.module.css";
import searchico from '../../Images/search.png';

function Home() {

    const [countries, setCountries] = useState([]);

    // Get all countries
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

    return (
        <div className="container">
            <h1 className={classes.search_for_text}>Search for a country</h1>
            {/*{countries.map(function (country, id) {*/}
            <Form.Control className={classes.searchbar} size="sm" type="text" placeholder="enter country name"/>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {/*{countries.map(function (country, id) {*/}
                {Array.from(countries).map((country, id) => (
                    <Col Key={id}>
                        <Card>
                            <Card.Header className={classes.home_card_header}>
                                <div className="row">
                                    <div className="col-9 col-md-8 col-xl-9">
                                        <p className={classes.home_official_name}>{country.name.official}</p>
                                        <p className={classes.home_common_name}>{country.name.common}</p>
                                    </div>
                                    <div className="col-3 col-md-4 col-xl-3">
                                        <a className={classes.view_country_detail_btn} href={"/country/" + country.cca3}>
                                            <img src={searchico} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </Card.Header>
                            <ListGroup className="home-list-groupe" variant="flush">
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-9 col-md-9">
                                            <p>Country Code (Alpha 2)</p>
                                        </div>
                                        <div className="col-3 col-md-3">
                                            <p>{country.cca2}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-9 col-md-9">
                                            <p>Country Code (Alpha 3)</p>
                                        </div>
                                        <div className="col-3 col-md-3">
                                            <p>{country.cca3}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-9 col-md-9">
                                            <p>Currency</p>
                                        </div>
                                        <div className="col-3 col-md-3">
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
                                        <div className="col-9 col-md-9">
                                            <p>int. dial code</p>
                                        </div>
                                        <div className="col-3 col-md-3">
                                            <p>{country.idd.root}{country.idd.suffixes}</p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="row">
                                        <div className="col-9 col-md-9">
                                            <p>Language</p>
                                        </div>
                                        <div className="col-3 col-md-3">
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
