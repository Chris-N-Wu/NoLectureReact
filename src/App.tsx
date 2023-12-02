import React from 'react';
import './App.css';

import data from "./data/data.json";
import Landing from "./components/Landing";
import Searchbar from "./components/Searchbar";
import HeaderBar from "./components/HeaderBar";
console.log(data)

interface IJsonListProps {
    type1: string,
    type2: string
}


function App() {

    return (
        <>
            <HeaderBar/>

            <Searchbar/>

            <Landing/>
        </>
    );
}

export default App;
