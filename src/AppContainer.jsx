import React from 'react';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { Navbar } from 'react-bootstrap';
const AppContainer = ({valor}) => {
    const [counter , setCounter] = useState(valor);
    function Event(){
        //valor+=1; 
        //console.log(valor);
        setCounter(counter + 1)
    }
    return (
        <>
           <p>{counter}</p> 
           <Button onClick = {Event} variant='btn btn-primary'>Buttom Bootsrap</Button>
           {/* <button >MY COUNTER</button> */}
        </>
    )
}

export default AppContainer;