import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import {useGlobalContext} from "../data/SupabaseData";
import {ClassMeeting} from "../types/collection";
import {useParams} from "react-router";
import "../styles/RoomDescription.css"

/**
 * Displays availability info on a specific room of a building. No props
 * required, accessed through address.
 */
export default function RoomDescription() {
    // building and room maps to the link header
    let {building, room} = useParams()

    // data
    const {classes} = useGlobalContext()

    // days. TODO: Currently subpar implementation
    const Days: string[] = ["monday", "tuesday", "wednesday", "thursday", "friday"]

    let today = new Date().getDay()
    let hour = new Date().getHours().toString().padStart(2, "0");
    let minute = new Date().getMinutes().toString().padStart(2, "0");
    let currentTime = hour + ":" + minute;

    console.log(today, hour, minute, currentTime)

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
            {Days.map((day, numDay) => (         // number starts at 0 - monday, 1 - tuesday, 2 - ...
                <Container className={"mb-3"} key={numDay}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {day[0].toUpperCase() + day.slice(1)} {/* Upper-casing only the first letter*/}
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
                                            }).map((item, i) => {
                                                // setting the css color profiles
                                                // if the day is today, color it
                                                let css = ((numDay + 1 === today) ? "selectedDay" : "day")

                                                // if there is a pending class later in the day
                                                if (item.end_time) {
                                                    css = css.concat(((numDay + 1 === today)
                                                        && (item.end_time.slice(0, -3) > currentTime.toString()))
                                                        ? " pendingClass"
                                                        : "")
                                                }

                                                // display the start and end time
                                                return (
                                                    <Col className={"p-1"} key={i} xs={"auto"} sm={"auto"} md={"auto"}
                                                         lg={"auto"}>
                                                        <Card className={css}>
                                                            <Card.Text className={"p-2"}>
                                                                {item.start_time?.slice(0, -3)}-{item.end_time?.slice(0, -3)}
                                                            </Card.Text>
                                                        </Card>
                                                    </Col>
                                                )
                                            })
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
