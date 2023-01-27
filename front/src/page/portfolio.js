import scrollEvent from '../modules/scrollEvent.js';
import titleSet from '../modules/titleSet.js';
import locationBtns from '../modules/locationBtn.js';
import contentImgSet from "../modules/imgSet.js"

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
    const projectTitleSet = (
      title,
      githubLink,
      imgLink = '',
      imgSrc = '',
      imgW = '48px'
    ) => {
      return `
      <span style="display: flex; align-items: center;">
        <p style="font-size:24pt; font-weight:bold; color: #fff; padding: 1.5rem 0 1.5rem 0;">${title}</p>
        <a href="${githubLink}" target="_blank" style="display: flex; align-items: center;"><img src="/img/github.svg" style="width: 48px; padding-left: 1rem;"></a>
        <a href="${imgLink}" target="_blank" style="display: flex; align-items: center;"><img src="${imgSrc}" style="width: ${imgW}; padding-left: 0.5rem;"></a>
      </span>
      `;
    };
    const detailDescSet = (title, content) => {
      return `  
      <div class="descs" style="color: #d9d9d9;font-size: 14pt;">
        <span id="imgPlace"></span>
        <span style="font-weight: bold;">${title}</span>
        <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
        <span>${content}</span>
      </div>`;
      };
    const projectTitleAndDesc = (
      projectTitleSet,
      content,
      stack,
      period,
      member,
      detailDescSet
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
        padding: 1.5rem 1rem;
        width: 26vw;
        ">
          <div class="descs" style="color: #d9d9d9;font-size: 14pt; line-height: 130%;
          display: flex; flex-direction: column;">
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">내용 상세</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${content}</span>
            </div>
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">사용 스택</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${stack}</span>
            </div>
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">진행 기간</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${period}</span>
            </div>
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">참여 팀원</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${member}</span>
            </div>
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
        padding: 1.5rem 1rem;
        width: 26vw;
        ">
          ${detailDescSet}
        </div>
      </div>
      </div>
      </div>
      `;
    };
    scrollEvent();

    return `
    <div id="projectsContainer" style="display: flex; flex-direction: column; align-items: center; overflow: clip scroll; 
    width: 60vw; height: 100vh">
      <!---------------- 프로젝트 1 ---------------->
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
            'GPS와 AI기술을 활용해 반려동물 동반이 가능한 여행 루트 및 편의시설을 알려주는 애플리케이션 서비스입니다. 취향에 맞는 시설 해시태그 검색, 나만의 여행루트 짜기, 반려동물 맞춤 포토스팟, 배변 스팟 등을 제공합니다. ',
            'Language & Framework : React Native, React, JavaScript<br> Server : Node.js, Express.js <br> Database : MySQL <br> Cooperation Tools : git, slack <br> Test&Compile : Android Studio<br> Design &Architecture : figma',
            '2022.09.06 ~ 2022.10.21',
            '팀 트래블로퍼(Traveloper) 4인',
            `
            ${detailDescSet(
              '카테고리 스키마 및 DB설계',
              `${contentImgSet(
                'https://images2.imgbox.com/cb/1b/zSL86ed7_o.jpg',
                '24vw'
              )}<p>요구사항정의서에 따라 카테고리를 분류하고 스키마를 설계했습니다. 공공데이터포털의 데이터(CSV)와 API를 활용했으며, DBMS로 MySQL을 사용했습니다.</p><br>`
            )}
            ${detailDescSet(
              '카테고리 필터링 기능 구현',
              `<p>지역/견종/장소에 따라 순차적으로 카테고리를 필터링할 수 있는 알고리즘을 구성했습니다.</p>`
            )}
            `
          )}
        </div>
        <!---------------- 프로젝트 2 ---------------->
        <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TEAM PROJECT #2')}
          ${videoSet('https://gdurl.com/CaHv', '60vw', '100%', '0')}
          ${projectTitleAndDesc(
            projectTitleSet(
              '주식 매수 추천서비스',
              'https://github.com/H-Choyoung/project_a_4'
            ),
            '주식 종목 상승 및 하락 여부, 주식 관련 뉴스, 상세 그래프, 종목 검색, 자체적인 방식으로 주식 매수를 추천하는 기능 등이 있는 웹브라우저 기반 서비스입니다.(제공된 SQL 데이터 활용)',
            'Language & Library : Front(TypeScript, React, axios, react-router, apexcharts 등)<br> Back(Python, pymysql, numpy, pandas 등)<br> Server : Flask <br> Database : MariaDB, HeidiSQL <br> Cooperation Tools : git, slack <br> Design &Architecture : figma',
            '2022.11.04 - 2022.12.08',
            `팀 A4 4인 <br><br> ${contentImgSet(
              'https://images2.imgbox.com/f5/e8/ev6H9IqD_o.jpg',
              '24vw'
            )}`,
            `
            ${detailDescSet(
              '주식 정보 테이블 구현',
              `${contentImgSet(
                'https://images2.imgbox.com/9b/b7/gKc3bbqN_o.jpg',
                '24vw'
              )}<p>마켓(KOSPI, KOSDAQ)에 따라 2열로 구분한 뒤 종목명, 등락가, 등락율, 종가로 행을 구성한 뒤 등락가를 기준으로 순위별로 정렬했습니다. <br> 기존 DB에는 등락 관련 데이터가 없었기에 DB테이블에 공통키를 삽입한 뒤 SQL쿼리로 JOIN, 등락가와 등락율을 연산해서 테이블에 출력했습니다. </p><br>`
            )}
            ${detailDescSet(
              '일정 계획, 프로젝트 작업내역 기록',
              `${contentImgSet(
                'https://images2.imgbox.com/29/70/HcRo6gs7_o.jpg',
                '24vw'
              )}<p>요구사항정의서가 결정된 뒤 주어진 기간에 따라 일정을 계획하고 실행했습니다.</p><br>`
            )}
            `
          )}
        </div>
        <!---------------- 프로젝트 3 ---------------->
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
            '대전 지역 운전자들을 대상으로 한 교통 정보 제공 서비스입니다. 모바일 기반 반응형 웹사이트로 교통 혼잡도, 단속구간, CCTV, 교통 속보 기능이 있습니다. 카카오맵API 및 국토교통부(ITS) API, 경찰청 API를 주로 활용했습니다.',
            '스택은이런거 썼음4',
            '22.00.00 ~ 22.00.02',
            '0명',
            '내가 담당한 기능'
          )}
        </div>
        <!---------------- 프로젝트 4 ---------------->
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
