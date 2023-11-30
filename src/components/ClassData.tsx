import {useCallback, useEffect, useState} from "react";
import supabase from "../SupabaseClient";
import {ClassMeeting} from "../types/collection";

export default function ClassData(){
    const [classes, setClasses] = useState<ClassMeeting[]>([]);

    const getClassData = useCallback(async () => {
        const {data, error} = await supabase
            .from("distinct_building")
            .select("*");
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
            {classes.map((ClassMeeting,  index) => (
                <h3 key={index}>
                    {ClassMeeting.building_name}
                </h3>
            ))}
        </>
    )
}