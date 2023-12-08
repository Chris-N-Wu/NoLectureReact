import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

import Landing from "./components/Landing";
import Searchbar from "./components/Searchbar";
import HeaderBar from "./components/HeaderBar";
import {ClassMeeting} from "./types/collection";
import supabase from "./SupabaseClient";
import {MyGlobalContext} from "./data/SupabaseData";

function App() {
    const [searchData, setSearchData] = useState<string>('');

    const [classes, setClasses] = useState<ClassMeeting[]>([]);
    const getClassData = useCallback(async () => {
        const {data, error} = await supabase
            .from("Fall_2023")
            .select("*")
        if (error) {
            console.log("error", error);
        } else {
            setClasses(data)
        }

    }, []); // dependencies indicate when to change this value based on another

    useEffect(() => {
        return () => {
            getClassData().then(r => null)
        };
    }, []);



    return (
        <MyGlobalContext.Provider value={{classes, setClasses}}>
            <HeaderBar/>

            <Searchbar onSearchbarChange={setSearchData}/>


            <Landing filter={searchData}/>
        </MyGlobalContext.Provider>
    );
}

export default App;
