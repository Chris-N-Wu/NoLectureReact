import React, {useCallback, useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import {Button, Col, Container, Row} from "react-bootstrap";
import "../styles/cards.css"
import {ClassMeeting} from "../types/collection";
import supabase from "../SupabaseClient";
import RoomCard from "./RoomCard";


interface IJsonListProps {
    type1: string,
    type2: string
}

const JsonList: React.FC<ClassMeeting> = (classMeeting: ClassMeeting) => {
    const [classes, setClasses] = useState<ClassMeeting[]>([]);

    const getClassData = useCallback(async () => {
        const {data, error} = await supabase
            .from("Fall_2023")
            .select("*")
            .eq("building_name", classMeeting.building_name ? classMeeting.building_name : "Value Is Null")
        // .limit(20);
        if (error) {
            console.log("error", error);
        } else {
            console.log(data)
            setClasses(data)
        }

    }, []);

    useEffect(() => {
        return () => {
            getClassData()
        };
    }, [getClassData]);

    let classesSet: Set<string> = new Set()
    classes.forEach(item => {
        if (item.room != null) {
            classesSet.add(item.room)
        }
    })

    let classesList: string[] = Array.from(classesSet)
    classesList.sort((string1: String, string2: String) => (string1 < string2 ? -1 : 1));

    return (
        <Col>
            <div className={"mb-3"}>
                <Card>
                    <Card.Body>
                        <Card.Title> {classMeeting.building_name} </Card.Title>
                        <Card.Text>
                            <Container fluid>
                                <Row lg={6}>
                                    {classesList.map((individualClass, i) => (
                                        <RoomCard building={classMeeting.building_name ? classMeeting.building_name : "Null"} room={individualClass}></RoomCard>
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

export default JsonList