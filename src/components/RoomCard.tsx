import React, {useEffect} from "react";
import {Card, Col} from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface IRoomProps {
    building: string
    room: string
}

const RoomCard = (props: IRoomProps) => {
    useEffect(() => {
        AOS.init(); //You can add options as per your need inside an object
    }, []);


    return (
        <Col style={{display:'flex', justifyContent:'left'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {props.room}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RoomCard