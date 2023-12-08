import React from "react";
import {Button, Col} from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RoomCard({room} : {room: string}) {
    // useEffect(() => {
    //     AOS.init(); //You can add options as per your need inside an object
    // }, []);


    return (
        <Col style={{display:'flex', justifyContent:'center'}}>
            <Button className={"mb-2"} style={{ width: '18rem'}}>{room}</Button>
        </Col>
    )
}