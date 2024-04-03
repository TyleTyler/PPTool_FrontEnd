import { PhoneListContext } from "./phoneContext";
import { useContext } from "react";

export const usePhoneListContext = ()=>{
    const context = useContext(PhoneListContext)
    if(!context){
        throw Error("useVideoContext must be used within its scope")
    }
    return context
}