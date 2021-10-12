import React from "react";
import './Main.css'
import vaweIcon from '../../images/icons/vawe.svg'

export function Main() {
    return (
        <div className = 'main-block'>
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