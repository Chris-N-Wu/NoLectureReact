import {Container, Row} from "react-bootstrap";
import JsonList from "./JsonList";
import React, {useCallback, useEffect, useState} from "react";
import {ClassMeeting} from "../types/collection";
import supabase from "../SupabaseClient";


const Landing = () => {
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
                    ))
                }
            </Row>
        </Container>
    )
}

export default Landing