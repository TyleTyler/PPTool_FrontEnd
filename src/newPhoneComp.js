import { useState } from "react";
import { usePhoneListContext } from "./usePhoneContext";

export function NewPhone() {
    const { addPhoneState,setAddPhoneState} = usePhoneListContext()
    const [schoolname, setSchoolName] = useState('')
    const [extension, setExtension] = useState('')
    const [password, setPassword] = useState('')
    const [server, setServer] = useState('')
    const [NTP, setNTP] = useState('')
    const handleSumbit = (phone)=>{
        console.log(phone)
    }
    return ( 
    <form className='addPhoneState' onSubmit={(e)=>{
        e.preventDefault()
        handleSumbit({
            schoolname: schoolname,
            extension: extension,
            password: password,
            server: server,
            NTP: NTP
        })
        setAddPhoneState(false)
    }}> 
        <div onClick={(e)=>{setAddPhoneState(false)}}className='closePhoneState'/>
        <section className='inputSection'>
            <div id='schoolName'>
                <label for="schoolName" id='schoolName'> School Name </label>
                <input required onChange={(e)=>{ setSchoolName(e.currentTarget.value)}} autoFocus name="schoolName" type='text'/>  
            </div>
            <div id='extension'>
                <label for="extension"> Extension </label>
                <input required onChange={(e)=>{ setExtension(e.currentTarget.value)}} name="extension" type='text'/>
            </div>
            <div id='password'>
                <label for="password"> Password </label>
                <input required onChange={(e)=>{ setPassword(e.currentTarget.value)}} name="password" type='text'/>
            </div>
            <div id='server'>
                <label for="server"> Server </label>
                <input required onChange={(e)=>{ setServer(e.currentTarget.value)}} name="server" type='text'/>
            </div>
            <div id='NTP'>
                <label for="NTP"> NTP </label>
                <input required onChange={(e)=>{ setNTP(e.currentTarget.value)}} name="NTP" type='text'/>
            </div>
            <button className="addPhoneBut"> Add Phone </button>
        </section>
    </form> 
    );
}

export default NewPhone;