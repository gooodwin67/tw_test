import React from "react";
import './Header.css'
import accountIcon from '../../images/icons/account.svg'
import menuIcon from '../../images/icons/menu.svg'
import { NavLink } from "react-router-dom";

export function Header(props) {
    console.log(props.store.getState())
    return (
        <div className = {
            !props.store.getState().HeaderPage.showMenu
            ? 'off_menu_hide'
            : 'off_menu_show'
        }>
            <div className = 'header-block'>
                <div className = 'logo'>
                <NavLink to = '/'>
                    <h3>TWEELY</h3>
                </NavLink>
                </div>
                <div className = 'icon-account'>
                    <img onClick = {props.signShow} src = {accountIcon} alt=''/>
                </div>
                <div className = 'icon-menu'>
                    <img onClick = {props.menuShow} src = {menuIcon} alt='' />
                </div>
                <div className = 'off_menu'>
                    <NavLink to = 'shop'>Магазин</NavLink>
                    <NavLink to = 'about'>О компании</NavLink>
                    <NavLink to = 'contacts'>Контакты</NavLink>
                    
                    
                </div>
            </div>
            {
            props.store.getState().HeaderPage.showSign
            ? <div className = 'sign_block'>
                sign <br />
                <span onClick = {props.signShow}>x</span>
            </div>
            : <div></div>
            }
        </div>
    )
}