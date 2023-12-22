import React, {useCallback, useEffect, useState} from 'react';
import './styles/App.css';

import HeaderBar from "./components/HeaderBar";
import {ClassMeeting} from "./types/collection";
import supabase from "./SupabaseClient";
import {MyGlobalContext} from "./data/SupabaseData";
import {Outlet} from "react-router";
import Footer from "./components/Footer";

function App() {
    const [classes, setClasses] = useState<ClassMeeting[]>([]);

    // Retrieves data from Supabase
    const getClassData = useCallback(async () => {
        console.log("Made API Call")
        const {data, error} = await supabase
            .from("Fall_2023")
            .select("*")
        if (error) {
            console.log("error", error);
        } else {
            setClasses(data)
        }

    }, []); // dependencies indicate when to change this value based on another

    // runs the function to get course meeting data
    useEffect(() => {
        return () => {
            getClassData().then(r => null)
        };
    }, []);

    return (
        <MyGlobalContext.Provider value={{classes, setClasses}}>

            <HeaderBar/>
            <Outlet/> {/* The routing */}
            <Footer/>
        </MyGlobalContext.Provider>
    );
}

export default App;
