import {createContext, useContext} from "react";
import {ClassMeeting} from "../types/collection";


//////////////////////////////////////////////////////////////////////
// Creating the global context
//////////////////////////////////////////////////////////////////////

export type GlobalContext = {
    classes: ClassMeeting[]
    setClasses:(data: ClassMeeting[]) => void
}

export const MyGlobalContext = createContext<GlobalContext>({
    classes: [],  // default value
    setClasses: () => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext)
