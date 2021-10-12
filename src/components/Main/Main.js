import React from "react";
import { Aboutpage } from "./Aboutpage/Aboutpage";
import './Main.css'
import { Mainpage } from './Mainpage/Mainpage'
import { Route } from "react-router-dom";


export function Main() {
    return (
        <div className = 'main-block'>
            <Route path = '/' exact><Mainpage /></Route>
            <Route path = '/about'><Aboutpage /></Route>
        </div>
    )
}