import scrollEvent from "../modules/scrollEvent.js";
import titleSet from "../modules/titleSet.js";

export default class {
  constructor() {
    document.title = 'PORTFOLIO';
  }
  async getHtml() {
    const imgSet = (imgSrc) => {
      return `
      <img src="${imgSrc}" 
      style="width: 60vw;  
      border: 1px solid #d9d9d9;">
      `;
    };
    const videoSet = (src, width, height, radiusSize) => {
      return `   
      <span style="display: flex; flex-direction:column;justify-content:center;">        
      <video controls style="
        border-top-left-radius: ${radiusSize};
        border-top-right-radius: ${radiusSize};
        border-bottom-left-radius: ${radiusSize};
        border-bottom-right-radius: ${radiusSize};
        border: 1px solid #d9d9d9;
        width:${width}; height:${height};
        ">
        <source src="${src}" type="video/mp4">
      </video>
      </span>`;
    };
    const projectTitleSet = (title, githubLink, imgLink = '', imgSrc="", imgW="48px") => {
      return `
      <span style="display: flex; align-items: center;">
        <p style="font-size:24pt; font-weight:bold; color: #fff; padding: 1.5rem 0 1.5rem 0;">${title}</p>
        <a href="${githubLink}" target="_blank" style="display: flex; align-items: center;"><img src="/img/github.svg" style="width: 48px; padding-left: 1rem;"></a>
        <a href="${imgLink}" target="_blank" style="display: flex; align-items: center;"><img src="${imgSrc}" style="width: ${imgW}; padding-left: 0.5rem;"></a>
      </span>
      `;
    };
    const projectTitleAndDesc = (
      projectTitleSet,
      content,
      stack,
      period,
      member,
      myContent,
    ) => {
      return `
      <div class="titleDescContainer" style="
      display: flex; align-items: center; flex-direction: column;
      max-width: 45vw;
      font-family: 'S-CoreDream-3Light';
      font-weight: 300;
      font-size: 16pt;
      ">
      ${projectTitleSet}
      <div style="
      display: flex; justify-content: space-between; width: 60vw;">
      <div class="menuAndContents">
        <div class="menus" 
        style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
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
        width: 26vw;
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
        <div class="menus"  
        style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
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
        width: 26vw;
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
    // const buttons = () => {
    //   return `
    //   <div id="slideButtons">
    //     <span id="leftBtn" 
    //     style="color:#d9d9d9; font-size:32pt; font-weight:bold;
    //     position: absolute;
    //     top: 50%; left: 19%;
    //     transform: translate(-50%, -50%);
    //     ">○</span>
    //     <span id="rightBtn"
    //     style="color:#d9d9d9; font-size:32pt; font-weight:bold;
    //     position: absolute;
    //     top: 50%; left: 85%;
    //     transform: translate(-50%, -50%);
    //     ">○</span>
    //     </div>
    //   `;
    // };
    scrollEvent();

    return `
    <div id="projectsContainer" style="display: flex; flex-direction: column; align-items: center; overflow: clip scroll; 
    width: 60vw; height: 100vh">
      <div style="height: fit-content; display: flex; flex-direction: column; align-items: center;
      padding: 3rem 0;
      ">
          ${titleSet('TEAM PROJECT #1')}
          <div style="display:flex; justify-content: space-evenly;width: 60vw;">
            ${videoSet('https://gdurl.com/DSpF', '362px', '762px', '2rem')}
            ${videoSet('https://gdurl.com/kbAJ', '362px', '762px', '2rem')}
          </div>
          ${projectTitleAndDesc(
            projectTitleSet(
              '반려동물 동반여행 루트 추천 애플리케이션',
              'https://github.com/H-Choyoung/team_project_C.git',
              '',
              'https://images2.imgbox.com/72/d0/zwXZSRC4_o.png'
            ),
            '어쩌구저쩌구',
            '스택은이런거 썼음',
            '22.09.06 ~ 22.10.21',
            '팀 트래블로퍼(Traveloper) 4인',
            '내가 담당한 기능'
          )}
        </div>
        <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TEAM PROJECT #2')}
          ${videoSet('https://gdurl.com/CaHv', '60vw', '100%', '0')}
          ${projectTitleAndDesc(
            projectTitleSet(
              '주식 매수매도 추천서비스',
              'https://github.com/H-Choyoung/project_a_4'
            ),
            '어쩌구저쩌구2',
            '스택은이런거 썼음2',
            '22.00.00 ~ 22.00.002',
            '0명',
            '내가 담당한 기능'
          )}
        </div>
          <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TEAM PROJECT #3')}
          ${videoSet('https://gdurl.com/CYA7', '23vw', '100%', '2rem')}
          ${projectTitleAndDesc(
            projectTitleSet(
              '대전 교통 정보 제공 서비스',
              'https://github.com/YANGSANGHEE/ProjectB',
              'http://43.200.117.50/',
              '/img/merjeonpass.svg',
              '100px'
            ),
            '어쩌구저쩌구3',
            '스택은이런거 썼음4',
            '22.00.00 ~ 22.00.002',
            '0명',
            '내가 담당한 기능'
          )}
        </div>
          <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TOY PROJECT #4')}
          ${imgSet('https://images2.imgbox.com/e1/c6/0VD765Dk_o.gif')}
          ${projectTitleAndDesc(
            '랜덤 뽑기 게임',
            '보물 찾기 게임. 랜덤으로 내용물이 바뀝니다.',
            'TypeScript, JavaScript, React, HTML',
            '22.12.26 ~ 23.01.07',
            '1명',
            '웹팩 세팅, 필요 이미지파일 제작, 랜덤 알고리즘 적용 등'
          )}
        </div>
    </div>
    `;
  }
}
