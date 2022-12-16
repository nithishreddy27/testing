import React,{useState} from "react";
import noteContext from "./noteContext";


const NoteState =(props)=>{

    const s={
        "name":"nit",
        "branch":"csit"
    }
    const [state, setState] = useState(s)

    const changeName=(n)=>{
        setState(n)
    }
    const changeBranch=(n)=>{
        setState(n)
    }
    return(
        <noteContext.Provider value={{state,setState,changeName,changeBranch}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState