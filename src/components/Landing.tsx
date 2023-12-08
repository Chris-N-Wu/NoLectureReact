import {Container, Row} from "react-bootstrap";
import React, {FC} from "react";
import {useGlobalContext} from "../data/SupabaseData";
import "../styles/cards.css"
import Building from "./Building"

interface Props2 {
    filter: string
}

const Landing: FC<Props2> = ({filter}: Props2) => {
    console.log(filter)
    const { classes } = useGlobalContext()

    // const [classes, setClasses] = useState<ClassMeeting[]>([]);
    //
    // const getClassData = useCallback(async () => {
    //     const {data, error} = await supabase
    //         .from("distinct_building")
    //         .select("*")
    //         .order("building_name");
    //     // .limit(20);
    //     if (error) {
    //         console.log("error", error);
    //     } else {
    //         console.log(data)
    //         setClasses(data)
    //     }
    //
    // },[]);
    //
    // useEffect(() => {
    //     return () => {
    //         getClassData()
    //     };
    // }, [getClassData]);

    const distinctBuildings = classes.filter(
        (classMeeting, i, arr) => arr.findIndex(t => t.building === classMeeting.building) === i
    );

    // sorting building names alphabetically
    distinctBuildings.sort(function(first, second){
        return ((first.building_name ?? "b") < (second.building_name ?? "a") ? -1 : 1)
    })

    const isNotNull = <T extends unknown>(item: T | null): item is T => item !== null

    // returns a list of buildings while filtering out nulls
    const distinctBuildingsNoNull = distinctBuildings.map(f=> f.building_name).filter(isNotNull)


    console.log("Distinct Buildings: ", {distinctBuildings})

    return (
        <Container className={"mt-5"}>  {/* Margin top*/}
            <Row lg={1} xs={1} sm={1} md={1}>
                {
                    distinctBuildingsNoNull.map((classMeeting, i) => (
                        <Building building={classMeeting ?? "No Building Name"} key={i}></Building>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Landing