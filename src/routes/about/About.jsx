import React from 'react'
import './About.scss'
import about from "../../images/about.jpg";

const About = () => {
  return  (
    <div className={'about__container'}>
    <h1>Биз xақимизда</h1>
      <div>Ассалому алайкум !</div>
      <div>Сизларга шуни маълум киламизки Наманганда махсус қолип (пресс-форма) ларни ясашда ва ишлатишда фойдаланиладиган асбоб-ускуна(инструмент)лар дукони очилди!</div>
      <div>Биз сизга буюртма асосида хам сизга керакли булган нарсаларни тез ва арзон нархларда етказиб берамиз.</div>
      <img src={about} className="about__images"/>
      <p>Асосий махсулоларимиз тури куйидагилар:</p>
      <ul className="about__list">
        <li>
          Металга ишлов берувчи асбоблар (Оправкалар, фрезалар ва хоказолар)
        </li>
        <li>
          Пластмасса қолиплари ва штамплар учун бутловчи кисмлар (Летниклар, толкателлар, пружиналар)
        </li>
        <li>Улчов асбоблари (Штангенциркуль, микрометр).</li>
        <li>Метални сайқаллаш учун ишлатиладиган асбоблар(Керамик тошлар, олмос тошлар, тош коғозлар).</li>
        <li>Қолип (пресс-форма) учун керак буладиган мойлар (Mold release , Mold cleaning , Anti rust).</li>
        <li>Эрозия йули билан металга ишлов берувчи ускуналар (WIRE EDM, SPARK EDM, SUPER DRIL</li>
        <li>Металга ЧПУ бошкаруви оркали ишлов берувчи ускуналар (VMC CNC)</li>
        <li>Пластмасса махсулотлари қуйиш учун ускуналар (Термопластавтоматлар ва қолиплар).</li>
      </ul>
    </div>
  )
}

export default About