import React from "react";
import './Header.css'
import accountIcon from '../../images/icons/account.svg'
import menuIcon from '../../images/icons/menu.svg'

export function Header(props) {
    //console.log(props.store)
    return (
        <div className = {
            !props.store.getState().HeaderPage.showMenu
            ? 'off_menu_hide'
            : 'off_menu_show'
        }>
            <div className = 'header-block'>
                <div className = 'logo'>
                    <h3>TWEELY</h3>
                </div>
                <div className = 'icon-account'>
                    <img src = {accountIcon} alt=''/>
                </div>
                <div className = 'icon-menu'>
                    <img onClick = {props.menuShow} src = {menuIcon} alt='' />
                </div>
                <div className = 'off_menu'>
                    111
                </div>
            </div>
        </div>
    )
}