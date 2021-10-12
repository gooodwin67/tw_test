import React from "react";
import './Mainpage.css'
import vaweIcon from '../../../images/icons/vawe.svg'

export function Mainpage() {
    return (
        <div className = 'main-page-block'>
           <div className = 'main_h'>
               <h1>ВИЗИТНАЯ КАРТОЧКА<br />ДЛЯ ВАШЕГО БИЗНЕСА</h1>
           </div>
           <div className = 'main_btn'>
               <span>Подробнее</span>
           </div>
           <div className = 'vawe-block'>
               <img src = {vaweIcon} alt='' />
           </div>
        </div>
    )
}