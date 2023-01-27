import stacks from "./stacks.js";
import sideMenus from '../modules/projectScrollBtns.js';

export default class {
  constructor() {
    document.title = "ABOUT";
  }
  async getHtml() {
    sideMenus([]); //프로젝트 메뉴 버튼 렌더링 방지

    const stackSet = () => {
      let set = [];
      stacks.forEach((val) => {
        const result = `<div style="
        display: flex; align-items: center;
        flex-direction: column; padding: 0.8rem 1rem; opacity: 90%; width:100px;">
        <img src='${val.src}' style="width:85%; padding-bottom: 0.8rem;">
        <p style="font-family:'Inconsolata', monospace;
        color: #D9D9D9;
        font-size: 12pt;
        ">${val.stack}</p>
        </div>`;
        set.push(result);
      });
      return set;
    };
    const titleSet = (titleName) => {
      return `
      <section class="sectionTitle"
        style="
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 4rem 0 3rem 0;
        ">
        <h3 
        style="font-family:'BIZ UDMincho',serif;
        font-size: 24pt; font-weight: normal;
        color: #fff;
        padding:0; margin: 1rem;
        "
        >${titleName}</h3>
        <div class="lines" 
        style="display: flex; align-items: center;">
          <div class="line" 
          style=" width: 30vw;
          border-bottom: 1px solid #D9D9D9;
          "></div>
          <div class="circle" 
          style="width:14px; height:14px; border-radius:50%; background-color:#D9D9D9;
          "></div>
          <div class="line" 
          style=" width: 30vw;
          border-bottom: 1px solid #D9D9D9;
          "></div>
        </div>
      </section>
      `;
    };
    return `
    <div id="allContainer"
      style="
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      overflow: clip scroll;
    ">
      <div class="sectionContainer"
      style="
      display: flex;
      align-items: center;
      flex-direction: column;
      ">
      ${titleSet('ABOUT ME')}
      <section class="sectionDesc"
        style="
        display: flex;
        align-items: center;
        ">
        <img src="/img/mySkull.png" style="width:35%;">
        <div class="infoContainer"
        style="
        font-family: 'S-CoreDream-3Light';
        font-weight: 300;
        font-size: 16pt;
        padding-left: 4rem;
        ">
          <h3 style="color:#fff;
          font-size: 21pt;
          font-weight: 300;
          padding-bottom: 1rem;
          ">황초영</h3>
          <p style="color:#00FF38;
          font-family:'Inconsolata', monospace;
          font-size: 18pt;
          ">FULL STACK DEVELOPER</p>
          <p style="color:#D9D9D9;
          padding-bottom: 1.5rem;
          font-weight: 300;
          ">: 잡초같은 끈기의 개발자</p>
          <div style="display: flex; 
          flex-direction: column;
          color:#D9D9D9;
          padding-bottom: 1rem;
          font-weight: 200;
          font-size: 14pt;
          max-width: 30vw;">
            <p style="padding-bottom: 0.3rem;">전북대학교 졸업 (2013 ~ 2018)</p>
            <p>[KDT]기업에서 요구하는 프레임워크를 활용한 풀스택 개발자(Node, ECMAscript)양성과정 수료 (2022.07.19 ~ 2023.01.15)</p>
          </div>
          <a href="https://github.com/H-Choyoung"><img src="/img/github.svg"></a>
        </div>
      </section>
    </div>
    <div class="sectionContainer"
      style="
      display: flex;
      align-items: center;
      flex-direction: column;
    ">
      ${titleSet('MY SKILLS')}
      <section class="sectionDesc"
      style="
      display: flex;
      align-items: center;
      ">
        <div style="
        display: flex;
        align-items: center;
        max-width: 60vw;
        flex-flow: wrap;
        margin-bottom: 2rem;
        ">
        ${stackSet()}
        </div>
      </section>
    </div>
  </div>
  `;
  }
}