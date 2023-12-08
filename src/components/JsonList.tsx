import React, {useCallback, useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import {Button, Col, Container, Row} from "react-bootstrap";
import "../styles/cards.css"
import {ClassMeeting} from "../types/collection";
import supabase from "../SupabaseClient";
import RoomCard from "./RoomCard";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useGlobalContext} from "../data/SupabaseData";

interface IJsonListProps {
    type1: string,
    type2: string
}

const JsonList: React.FC<ClassMeeting> = (classMeeting: ClassMeeting) => {
    const { classes } = useGlobalContext()

    // const getClassData = useCallback(async () => {
    //     const {data, error} = await supabase
    //         .from("Fall_2023")
    //         .select("*")
    //         .eq("building_name", classMeeting.building_name ? classMeeting.building_name : "Value Is Null")
    //     // .limit(20);
    //     if (error) {
    //         console.log("error", error);
    //     } else {
    //         console.log(data)
    //         setClasses(data)
    //     }
    //
    // }, []);
    //
    // useEffect(() => {
    //     return () => {
    //         getClassData()
    //     };
    // }, [getClassData]);

    // useEffect(() => {
    //     AOS.init(); //You can add options as per your need inside an object
    // }, []);


    let classesSet: Set<string> = new Set()
    classes.forEach(item => {
        if (item.room != null) {
            classesSet.add(item.room)
        }
    })

    let classesList: string[] = Array.from(classesSet)
    classesList.sort((string1: String, string2: String) => (string1 < string2 ? -1 : 1));   // ordering in alphanumerical order

    // console.log("Classes list as follows: ")
    // console.log(classesList)

    return (
        <Col>
            <div className={"mb-3"}>
                <Card data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                    <Card.Body>
                        <Card.Title> helllooo </Card.Title>
                        <Card.Text>
                            <Container>
                                <Row lg={6}>
                                    {classesList.map((individualClass, i) => (
                                        <RoomCard room={individualClass} key={i}></RoomCard>
                                    ))}
                                    hello
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