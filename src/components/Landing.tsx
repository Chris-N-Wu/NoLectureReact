import {Col, Container, Row} from "react-bootstrap";
import React, {FC, useCallback, useEffect} from "react";
import {useGlobalContext} from "../data/SupabaseData";
import "../styles/cards.css"
import Building from "./Building"
import { isNotNull } from "../utils/isNotNull";

const Landing: FC<Props2> = ({filter}: Props2) => {
    const { classes } = useGlobalContext()

    // removing duplicates
    const distinctBuildings = classes.filter(
        (classMeeting, i, arr) => arr.findIndex(t => t.building === classMeeting.building) === i
    );

    // sorting building names alphabetically
    distinctBuildings.sort(function(first, second){
        return ((first.building_name ?? "b") < (second.building_name ?? "a") ? -1 : 1)
    })

    // returns a list of buildings while filtering out nulls
    let distinctBuildingsNoNull = distinctBuildings.map(f=> f.building_name).filter(isNotNull)

    const distinctCallback = useCallback(
        () => {
            if (filter) {
                distinctBuildingsNoNull = distinctBuildingsNoNull.filter(function (str) { return str?.toLowerCase()?.includes(filter.toLowerCase())})
            }
        },
        [filter],   // useCallback on change in filter
    );

    distinctCallback()

    return (
        <Container className={"mt-5"}>  {/* Margin top*/}
            {/*<Row lg={1} xs={1} sm={1} md={1}>*/}
                {
                    distinctBuildingsNoNull.map((classMeeting, i) => (
                        <Building building={classMeeting} key={i}></Building>
                    ))
                }
            {/*</Row>*/}
        </Container>
    )
}

interface Props2 {
    filter: string
}

export default Landing