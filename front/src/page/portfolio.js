import scrollEvent from "../modules/scrollEvent.js";

export default class {
  constructor() {
    document.title = 'PORTFOLIO';
  }
  async getHtml() {
    const titleSet = (titleName) => {
      return `
      <section class="sectionTitle"
        style="
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 3rem;
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
    const imgSet = (imgSrc) => {
      return `
      <img src="${imgSrc}" 
      style="width: 60vw;  
      border: 1px solid #d9d9d9;">
      `;
    };
    const projectTitleAndDesc = (
      title,
      content,
      stack,
      period,
      member,
      myContent
    ) => {
      return `
      <div class="titleDescContainer" style="
      display: flex; align-items: center; flex-direction: column;
      max-width: 45vw;
      font-family: 'S-CoreDream-3Light';
      font-weight: 300;
      font-size: 16pt;
      ">
      <p style="font-size:24pt; font-weight:bold; color: #fff; padding: 1.5rem 0 1.5rem 0;">${title}</p>
      <div style="
      display: flex; justify-content: space-between; width: 60vw;">
      <div class="menuAndContents">
        <div class="menus" 
        style="
        display: flex;
        justify-content: center;
        width: 26vw;
        border: 1px solid #d9d9d9; 
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background-color: #000; 
        mix-blend-mode: difference;">
          <p style="color: #fff; font-weight: bold; white-space: nowrap; padding: 0.3rem 6rem;">프로젝트 상세</p>
        </div>
        <div class="descContainer" style="
        padding: 1rem 3rem;
        ">
          <div class="descs" style="color: #d9d9d9;font-size: 14pt;">
            <span style="font-weight: bold;">내용 상세 |</span>
            <span>${content}</span><br>
            <span style="font-weight: bold;">사용 스택 |</span>
            <span>${stack}</span><br>
            <span style="font-weight: bold;">진행 기간 |</span>
            <span>${period}</span><br>            <span style="font-weight: bold;">참여 팀원 |</span>
            <span>${member}</span>
          </div>
        </div>
        </div>
      <div class="menuAndContents">
        <div class="menus"  style="
        display: flex;
        justify-content: center;
        width: 26vw;
        border: 1px solid #d9d9d9; 
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background-color: #000; 
        mix-blend-mode: difference;">
          <p style="color: #fff; font-weight: bold; white-space: nowrap; padding: 0.3rem 6rem;">담당 작업</p>
        </div>
        <div class="descContainer" style="
        padding: 1rem 3rem;
        ">
          <div class="descs" style="color: #d9d9d9;font-size: 14pt;">
            <span style="font-weight: bold;">내용 상세 |</span>
            <span>${myContent}</span>
          </div>
        </div>
      </div>
      </div>
      </div>
      `;
    };
    const buttons = () => {
      return `
      <div id="slideButtons">
        <span id="leftBtn" 
        style="color:#d9d9d9; font-size:32pt; font-weight:bold;
        position: absolute;
        top: 50%; left: 19%;
        transform: translate(-50%, -50%);
        ">○</span>
        <span id="rightBtn"
        style="color:#d9d9d9; font-size:32pt; font-weight:bold;
        position: absolute;
        top: 50%; left: 85%;
        transform: translate(-50%, -50%);
        ">○</span>
        </div>
      `;
    };
    scrollEvent();

    return `
    <div id="projectsContainer" style="display: flex; flex-direction: column; align-items: center; overflow: clip scroll; 
    width: 60vw; height: 100vh">
      <div style="height: fit-content; display: flex; flex-direction: column; align-items: center;
      padding: 3rem 0;
      ">
          ${titleSet('TEAM PROJECT #1')}
          ${imgSet('https://images2.imgbox.com/f3/56/PpcbHNX5_o.jpg')}
          ${projectTitleAndDesc(
            '프로젝트명',
            '어쩌구저쩌구',
            '스택은이런거 썼음',
            '22.00.00 ~ 22.00.00',
            '0명',
            '내가 담당한 기능'
          )}
        </div>
        <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TEAM PROJECT #2')}
          ${imgSet('https://images2.imgbox.com/f3/56/PpcbHNX5_o.jpg')}
          ${projectTitleAndDesc(
            '프로젝트명2',
            '어쩌구저쩌구2',
            '스택은이런거 썼음2',
            '22.00.00 ~ 22.00.002',
            '0명',
            '내가 담당한 기능'
          )}
        </div>
          <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TEAM PROJECT #3')}
          ${imgSet('https://images2.imgbox.com/f3/56/PpcbHNX5_o.jpg')}
          ${projectTitleAndDesc(
            '프로젝트명3',
            '어쩌구저쩌구3',
            '스택은이런거 썼음4',
            '22.00.00 ~ 22.00.002',
            '0명',
            '내가 담당한 기능'
          )}
        </div>
    </div>
    `;
  }
}
