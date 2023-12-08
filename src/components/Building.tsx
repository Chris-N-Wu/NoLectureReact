import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {useGlobalContext} from "../data/SupabaseData";
import RoomCard from "./RoomCard";

export default function Building({building} : {building: string}) {
    const { classes } = useGlobalContext()

    // Retrieving classes that are only in this building
    const classesInBuilding = classes.filter(
        (classMeeting) => classMeeting.building_name === building
    );

    // Retrieving only distinct rooms and sorting alpha-numerically
    const distinctClasses = classesInBuilding.filter(
        (classMeeting, i, arr) => arr.findIndex(t => t.room === classMeeting.room) === i
    ).sort(function (first, second) {
        return ((first.room ?? "1") < (second.room ?? "1") ? -1 : 1)
    });

    return (
        <Col>
            <div className={"mb-3"}>
                <Card>
                    <Card.Body>
                        <Card.Title> {building} </Card.Title>
                        <Card.Text>
                            <Container>
                                <Row lg={6}>
                                    {distinctClasses.map((individualClass, i) => (
                                        <RoomCard room={individualClass.room ?? "Null Value in Building.tsx"} key={i}></RoomCard>
                                    ))}
                                </Row>
                            </Container>
                        </Card.Text>
                        {/*<Card.Subtitle className={"text-muted"}> Some extraneous text </Card.Subtitle>*/}
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}



// const Building = ({building} : {building: string}) => {
//     return (
//         <h1>
//             Hello
//         </h1>
//     )
// }