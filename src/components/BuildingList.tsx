import {Container} from "react-bootstrap";
import React, {FC, useCallback} from "react";
import {useGlobalContext} from "../data/SupabaseData";
import Building from "./Building"
import {isNotNull} from "../utils/isNotNull";

interface Props {
    filter: string
}

/**
 * Maps through a list of buildings and displays them.
 *
 * @param filter    Which buildings to display
 */
const BuildingList: FC<Props> = ({filter}: Props) => {

    // data
    const {classes} = useGlobalContext()

    // removing duplicates
    const distinctBuildings = classes.filter(
        (classMeeting, i, arr) => arr.findIndex(t => t.building === classMeeting.building) === i
    );

    // sorting building names alphabetically
    distinctBuildings.sort(function (first, second) {
        return ((first.building_name ?? "b") < (second.building_name ?? "a") ? -1 : 1)
    })

    // returns a list of buildings while filtering out nulls
    let distinctBuildingsNoNull = distinctBuildings.map(f => f.building_name).filter(isNotNull)

    // filters out buildings by the 'filter' parameter
    if (filter) {
        distinctBuildingsNoNull = distinctBuildingsNoNull.filter(function (str) {
            return str?.toLowerCase()?.includes(filter.toLowerCase())
        })
    }

    return (
        <Container className={"mt-5"}>  {/* Margin top*/}
            {distinctBuildingsNoNull.map((classMeeting, i) => (
                <Building building={classMeeting} key={i}></Building>
            ))}
        </Container>
    )
}

export default BuildingList