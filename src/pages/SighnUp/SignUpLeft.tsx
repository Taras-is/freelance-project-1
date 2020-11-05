import React from "react";
import s from '../SighnUp/SignUp.module.css'
import {ImageGroup} from 'semantic-ui-react'
import caseImg from '../../assets/icons/airbrush.png'
import clockImg from '../../assets/icons/car-repair (2).png'
import moneyImg from '../../assets/icons/car-repair.png'
import auto from '../../assets/images/auto.jpg'

export default function () {

   return <div className={s.left_wrapper}>

       <div className={s.main_info}>

           <h2 className={s.main_info_header}>
               Що пропонує наш автосервіс?
           </h2>
           <img alt='auto' src={auto} className={s.photo}/>

       </div>

       <div className={s.cases}>
<div className={s.case_wrapper}>
    <div className={s.case_img}>
    <img alt='case' src={caseImg}/>
       </div>
    <div className={s.content}>
        <h3 className={s.header}>
            КУЗОВНІ РОБОТИ
        </h3>
        <p className={s.info}> Наші спеціалісти впораються з кузовними та малярними роботами будь-якої складності.</p>
    </div>
    </div>
           <div className={s.case_wrapper}>
               <div className={s.case_img}>
                   <img alt='case' src={moneyImg}/>
               </div>
               <div className={s.content}>
                   <h3 className={s.header}>
                      РЕМОНТ, ОБСЛУГОВУВАННЯ ВСІХ АГРЕГАТІВ
                   </h3>
                   <p className={s.info}> Ми відремонтуємо, замінимо та проведемо роботи щодо всіх агрегатів Вашого авто.</p>
               </div>
           </div>
           <div className={s.case_wrapper}>
               <div className={s.case_img}>
                   <img alt='case' src={clockImg}/>
               </div>
               <div className={s.content}>
                   <h3 className={s.header}>
                       ДІАГНОСТИКА
                   </h3>
                   <p className={s.info}> Проведемо повний комплекс комп'ютерної діагностики, та вирішимо всі питання щодо помилок.</p>
               </div>
           </div>


</div>
       </div>

}
