import { createContext, useReducer, useState } from "react";

export const PhoneListContext = createContext()

export const phoneListActions = { ADD : "add", REMOVE: "remove", ADDMULTIPLE: "addmultiple"}


export const phoneListReducer = (state, action)=>{
    switch(action.type){
        case(phoneListActions.ADD):
            return [...state, action.phoneObject]
        case(phoneListActions.REMOVE):
            return state.filter((phone) => phone !== action.phoneObject);
        case(phoneListActions.ADDMULTIPLE):
            const nList = state
            for(const phone of action.phoneList){
                nList.push(phone)
            }
            return nList
        default :
            return state
    }
}
export const PhoneListContextProvider = ({children})=>{
    const [addPhoneState, setAddPhoneState] = useState(false)
    const [phoneList, phoneFunctions] = useReducer(phoneListReducer, [])

    return(
        <PhoneListContext.Provider value={{phoneList, phoneFunctions, addPhoneState, setAddPhoneState}}>
            {children}
        </PhoneListContext.Provider>
    )
} 

