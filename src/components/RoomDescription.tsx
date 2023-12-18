import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import {useGlobalContext} from "../data/SupabaseData";
import {ClassMeeting} from "../types/collection";
import {useParams} from "react-router";

// interface Description {
//     building: string,
//     room: string
// }

export default function RoomDescription() {
    // building and room maps to the link header
    let { building, room } = useParams()

    const {classes} = useGlobalContext()

    const Days: string[] = ["monday", "tuesday", "wednesday", "thursday", "friday"]

    return (
        <div className={"mt-5"}>
            <Container className={"mb-3"}>
                <h1>
                    {building}
                </h1>
                <h2>
                    Room: {room}
                </h2>
            </Container>
            {Days.map((day, i) => (
                <Container className={"mb-3"} key={i}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {day[0].toUpperCase() + day.slice(1)}   {/* Upper-cassing only the first letter*/}
                            </Card.Title>
                            <Card.Text>
                                <Container>
                                    <Row>
                                        {
                                            classes.filter(function (item) {             // select only this day
                                                return !(item[day as keyof ClassMeeting] !== true);
                                            }).filter(function (item) {         // select only this building
                                                return item.building_name === building;
                                            }).filter(function (item) {         // select only this room
                                                return item.room === room
                                            }).sort(function (first, second) {  // sort by start time
                                                return ((first.start_time ?? "1") < (second.start_time ?? "1") ? -1 : 1)
                                            }).map((item, i) => (
                                                <Col className={"p-1"} key={i} xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"}>
                                                    <Card>
                                                        <Card.Text className={"p-2"}>
                                                            {item.start_time?.slice(0, -3)}-{item.end_time?.slice(0, -3)}
                                                        </Card.Text>
                                                    </Card>
                                                </Col>

                                            ))
                                        }
                                    </Row>

                                </Container>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Container>
            ))}
        </div>

    )

}
