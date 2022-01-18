/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './App.css'
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'
import Loading from './componentes/loader/Loading'



export default () => {
   
    const done = false;
   
    if (done) {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div> 
        )
    }
    else {
        return(
            <div className="App">
                <Loading></Loading>
            </div>
        )
    } 

   
   
   
   
}



