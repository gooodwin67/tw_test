import React from "react";
import './Aboutpage.css';
import about from '../../../images/about.png';

export function Aboutpage() {
    return (
        <div className = 'about-page-block'>
            <div className = 'about-page-wrap'>
                <div className = 'about-page-left'>
                    <h2>О КОМПАНИИ</h2>
                    <p>
                    Генерация рыбатекста происходит довольно просто: есть несколько фиксированных наборов фраз и словочетаний, из которых в опредёленном порядке формируются предложения. Предложения складываются в абзацы – и вы наслаждетесь очередным бредошедевром.
                    </p>
                    <p>
Сама идея работы генератора заимствована у псевдосоветского "универсального кода речей", из которого мы выдернули используемые в нём словосочетания, запилили приличное количество собственных, в несколько раз усложнили алгоритм
                    </p>
                </div>
                <div className = 'about-page-right'>
                    <img src={about} alt=''/>
                </div>
            </div>
           
        </div>
    )
}