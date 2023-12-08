import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

import Landing from "./components/Landing";
import Searchbar from "./components/Searchbar";
import HeaderBar from "./components/HeaderBar";
import {ClassMeeting} from "./types/collection";
import supabase from "./SupabaseClient";
import {MyGlobalContext} from "./data/SupabaseData";
// https://dev.to/madv/usecontext-with-typescript-23ln
function App() {
    const [searchData, setSearchData] = useState<string>('');

    const [classes, setClasses] = useState<ClassMeeting[]>([]);
    const getClassData = useCallback(async () => {
        const {data, error} = await supabase
            .from("Fall_2023")
            .select("*")
            // .limit(20);
        if (error) {
            console.log("error", error);
        } else {
            // console.log(data)
            setClasses(data)
        }

    }, []);
    useEffect(() => {
        return () => {
            getClassData()
        };
    }, [getClassData]);

    return (
        <>
            <MyGlobalContext.Provider value={{classes, setClasses}}>
                <HeaderBar/>

                <Searchbar onSearchbarChange={setSearchData}/>

                {/*{(value) => value.map((classd, i) => (*/}
                {/*    <p>{i}, {classd.building_name}</p>*/}
                {/*))}*/}
                <Landing filter={searchData}/>
            </MyGlobalContext.Provider>


        </>
    );
}

export default App;
