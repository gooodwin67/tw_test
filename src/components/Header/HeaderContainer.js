import React from "react";
import { Header } from "./Header";
import { menuShowAC, signShowAC } from "../../redux/header-reducer";

export class HeaderContainer extends React.Component {
    render () {
        //console.log(this.props)
        let menuShow = () => {
            this.props.store.dispatch(menuShowAC())
        }
        let signShow = () => {
            this.props.store.dispatch(signShowAC())
        }
        return (
            <Header store = {this.props.store} menuShow = {menuShow} signShow = {signShow}/>    
        )
    }
    
    
}