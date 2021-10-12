import React from "react";
import { Header } from "./Header";
import { menuShowAC } from "../../redux/header-reducer";

export class HeaderContainer extends React.Component {
    render () {
        //console.log(this.props)
        let menuShow = () => {
            this.props.store.dispatch(menuShowAC())
        }
        return (
            <Header store = {this.props.store} menuShow = {menuShow}/>    
        )
    }
    
    
}