import React,{ useReducer} from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import Catalogo from "../../src/Screens/Catalogo";

const FirebaseState = props =>{
    const inicialState ={
        Catalogo: []
    }
    const[state, dispatch] = useReducer(FirebaseReducer, inicialState)
    return(
        <FirebaseContext.Provider
            value={{
                Catalogo: state.Catalogo, firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}
export default FirebaseState;
