import RoomDescription from "./RoomDescription";
import Searchbar from "./Searchbar";
import Landing from "./Landing";
import React, {useState} from "react";

const Home = () => {
    const [searchData, setSearchData] = useState<string>('');

    return (
        <>
            {/*<RoomDescription building={"Behrakis Health Sciences Cntr"} room={"010"}></RoomDescription>*/}

            <Searchbar onSearchbarChange={setSearchData}/>

            <Landing filter={searchData}/>
        </>
    )
}

export default Home