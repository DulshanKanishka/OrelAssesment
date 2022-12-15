// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./Layout/Header/Header";
import {Fragment} from "react";
import Country from "./pages/Country/Country";

function App() {
    return (
        <Fragment>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/country/:id" element={<Country/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
