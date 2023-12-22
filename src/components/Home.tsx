import Searchbar from "./Searchbar";
import BuildingList from "./BuildingList";
import React, {useState} from "react";

const Home = () => {
    const [searchData, setSearchData] = useState<string>('');

    return (
        <>
            <Searchbar onSearchbarChange={setSearchData}/>

            <BuildingList filter={searchData}/>
        </>
    )
}

export default Home