import React, {useEffect} from "react";
import {Button, Card, Col} from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

// interface IRoomProps {
//     building: string
//     room: string
// }

export default function RoomCard({room} : {room: string}) {
    // useEffect(() => {
    //     AOS.init(); //You can add options as per your need inside an object
    // }, []);


    return (
        <Col style={{display:'flex', justifyContent:'left'}}>
            {/*<Card className={"mb-2"} style={{ width: '18rem' }}>*/}
                <Button className={"mb-2"} style={{ width: '18rem'}}>{room}</Button>
                {/*<Card.Body>*/}
                {/*    {room}*/}
                {/*</Card.Body>*/}
            {/*</Card>*/}
        </Col>
    )
}

// export default RoomCard