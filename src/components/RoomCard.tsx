import React from "react";
import {Button, Col} from "react-bootstrap";

interface Props {
    building: string,
    room: string
}

/**
 * Generates a button with a link to the respective building and room
 *
 * @param props building: string, room: string
 */
export default function RoomCard(props: Props) {
    // crude implementation, but an implementation nonetheless
    let linkTo = `/${props.building}/${props.room}`


    return (
        <Col style={{display:'flex', justifyContent:'center'}}>
            {/*<Link to={`/${props.building}/${props.room}`} style={{width: "1rem"}}>*/}
                <Button className={"mb-2"} style={{width: "18rem"}} href={linkTo}>{props.room}</Button>
            {/*</Link>*/}
        </Col>
    )
}