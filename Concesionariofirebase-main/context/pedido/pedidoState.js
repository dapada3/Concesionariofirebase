import React,{ useReducer} from "react";
import firebase from "../../firebaseDB";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import Home from "../../src/Screens/Home";

const PedidoState = props =>{
    const inicialState ={
        Home: []
    }
    const[state, dispatch] = useReducer(PedidoReducer, inicialState)
    return(
        <PedidoContext.Provider
            value={{
                Home: state.Home, firebase
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )

}
export default PedidoState;