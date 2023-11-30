import React from "react";
import {Card, Col} from "react-bootstrap";

interface IRoomProps {
    building: string
    room: string
}

const RoomCard = (props: IRoomProps) => {
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