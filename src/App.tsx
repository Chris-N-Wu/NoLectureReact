import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

import data from "./data/data.json";
import {Container, Navbar, Row} from "react-bootstrap";
import JsonList from "./components/JsonList";
import ClassData from "./components/ClassData";
import {ClassMeeting} from "./types/collection";
import supabase from "./SupabaseClient";
console.log(data)

interface IJsonListProps {
    type1: string,
    type2: string
}


function App() {


    // const items: IJsonListProps[] = data["items"];

    const [classes, setClasses] = useState<ClassMeeting[]>([]);

    const getClassData = useCallback(async () => {
        const {data, error} = await supabase
            .from("distinct_building")
            .select("*")
            .order("building_name");
        // .limit(20);
        if (error) {
            console.log("error", error);
        } else {
            console.log(data)
            setClasses(data)
        }

    },[]);

    useEffect(() => {
        return () => {
            getClassData()
        };
    }, [getClassData]);

    return (
        <>
            {/*<Navbar className={"bg-danger text-white"}>*/}
            <Navbar bg={"danger"} variant={"dark"}>
                <Container>
                    <Navbar.Brand href="#home"> Campus Spot - Northeastern</Navbar.Brand>

                </Container>
            </Navbar>

            <Container className={"mt-5"}>  {/* Margin top*/}
                <Row lg={1} xs={1} sm={1} md={1}>
                        {
                            classes.map((classMeeting, i) => (
                                <JsonList id={classMeeting.id}
                                          subject={classMeeting.subject}
                                          course_number={classMeeting.course_number}
                                          course_title={classMeeting.course_title}
                                          building_name={classMeeting.building_name}
                                          building={classMeeting.building}
                                          room={classMeeting.room}
                                          monday={classMeeting.monday}
                                          tuesday={classMeeting.tuesday}
                                          wednesday={classMeeting.wednesday}
                                          thursday={classMeeting.thursday}
                                          friday={classMeeting.friday}
                                          start_time={classMeeting.start_time}
                                          end_time={classMeeting.end_time}
                                          start_date={classMeeting.start_date}
                                          end_date={classMeeting.end_date}
                                          key={i}></JsonList>
                                // <JsonList id={classMeeting.id}
                                //           subject={classMeeting.subject}
                                //           course_number={classMeeting.course_number}
                                //           course_title={classMeeting.course_title}
                                //           building_name={classMeeting.building_name}
                                //           building={classMeeting.building}
                                //           room={classMeeting.room}
                                //           monday={classMeeting.monday}
                                //           tuesday={classMeeting.tuesday}
                                //           wednesday={classMeeting.wednesday}
                                //           thursday={classMeeting.thursday}
                                //           friday={classMeeting.friday}
                                //           start_time={classMeeting.start_time}
                                //           end_time={classMeeting.end_time}
                                //           start_date={classMeeting.start_date}
                                //           end_date={classMeeting.end_date}
                                //           key={i}></JsonList>
                            ))
                        }
                </Row>
            </Container>
        </>
    );
}

export default App;
