import scrollEvent from '../modules/scrollEvent.js';
import titleSet from '../modules/titleSet.js';
import contentImgSet from "../modules/imgSet.js"
import stackContentsSet from '../modules/stackContentsSet.js';
import videoSet from '../modules/videoSet.js';
import projectTitleSet from '../modules/projectTitleSet.js'
import projectTitleAndDesc from '../modules/projectTitleAndDesc.js';
import detailDescSet from '../modules/detailDescSet.js';


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
              'https://github.com/H-Choyoung/team_project_C.git'
            ),
            'GPS와 AI 기술을 활용해 반려동물 동반이 가능한 여행 경로 및 편의시설을 알려주는 애플리케이션 서비스입니다. 취향에 맞는 시설 해시태그 검색, 나만의 여행 경로 짜기, 반려동물 맞춤 포토스팟, 배변 스팟 등을 제공합니다. ',
            stackContentsSet(
              'JavaScript',
              'React Native, React',
              'Node.js, Express.js',
              'MySQL',
              'git, slack',
              'Android Studio, Visual Studio Code',
              'Figma',
              'Etc'
            ),
            '2022.09.06 ~ 2022.10.21',
            '팀 트래블로퍼(Traveloper) 4인<br><br><img src="/img/hackathon.svg" style="width: 90%">',
            `
            ${detailDescSet(
              '카테고리 스키마 및 DB설계',
              `${contentImgSet(
                'https://images2.imgbox.com/cb/1b/zSL86ed7_o.jpg',
                '24vw'
              )}<p>요구사항 정의서에 따라 카테고리를 분류하고 스키마를 설계했습니다. 공공데이터포털의 데이터(CSV)와 API를 활용했으며, DBMS로 MySQL을 사용했습니다.</p><br>`
            )}
            ${detailDescSet(
              '카테고리 필터링 기능 구현',
              `<p>지역/견종/장소별로 순차적으로 카테고리를 필터링할 수 있는 알고리즘을 구성했습니다.</p>`
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
            '주식 종목 상승 및 하락 여부, 주식 관련 뉴스, 상세 그래프, 종목 검색, 자체적인 방식으로 주식 매수를 추천하는 기능 등이 있는 웹브라우저 기반 서비스입니다. (제공된 SQL 데이터 활용)',
            stackContentsSet(
              'Front : TypeScript, Back : Python',
              'React, axios, react-router, apexcharts,  pymysql, numpy, pandas 등',
              'Node.js, Flask',
              'MariaDB, HeidiSQL ',
              'git, slack',
              'Visual Studio Code',
              'Figma',
              'Etc'
            ),
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
              )}<p>마켓(KOSPI, KOSDAQ)에 따라 2열로 구분한 뒤 종목명, 등락가, 등락률, 종가로 행을 구성한 뒤 등락가를 기준으로 순위별로 정렬했습니다. <br> 기존 DB에는 등락 관련 데이터가 없었기에 DB 테이블에 공통키를 삽입한 뒤 SQL쿼리로 JOIN, 등락가와 등락률을 연산해서 테이블에 출력했습니다. </p><br>`
            )}
            ${detailDescSet(
              '일정 계획, 프로젝트 작업내역 기록',
              `${contentImgSet(
                'https://images2.imgbox.com/29/70/HcRo6gs7_o.jpg',
                '24vw'
              )}<p>요구사항 정의서가 결정된 뒤 주어진 기간에 따라 일정을 계획하고 실행했습니다.</p><br>`
            )}
            `
          )}
        </div>
        <!---------------- 프로젝트 3 ---------------->
          <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TEAM PROJECT #3')}
          ${videoSet('https://gdurl.com/CYA7', '340px', '100%', '2rem')}
          ${projectTitleAndDesc(
            projectTitleSet(
              '대전 교통 정보 제공 서비스',
              'https://github.com/YANGSANGHEE/ProjectB',
              'http://43.200.117.50/',
              '/img/merjeonpass.svg',
              '100px'
            ),
            '대전 지역 운전자들을 대상으로 한 교통 정보 제공 서비스입니다. 모바일 기반 반응형 웹사이트로 교통 혼잡도, 단속구간, CCTV, 교통 속보 기능이 있습니다. 카카오맵API 및 국토교통부(ITS) API, 경찰청 API를 주로 활용했습니다.',
            stackContentsSet(
              'TypeScript',
              'React, axios, styled-component 등',
              'Node.js',
              'MariaDB',
              'git, slack',
              'Visual Studio Code',
              'Figma',
              'Release',
              'AWS, ubuntu, NGINX'
            ),
            '2022.12.12 ~ 2022.12.28',
            `팀 하이패스(HIPASS) 4인<br><br> ${contentImgSet(
              'https://images2.imgbox.com/8f/de/ybtcClpK_o.jpg',
              '24vw'
            )}`,
            `
            ${detailDescSet(
              'UI 디자인 및 일부 마크업',
              `${contentImgSet(
                'https://images2.imgbox.com/ed/be/vSkyLbHP_o.jpg',
                '24vw'
              )}<p>협업 그래픽 툴 Figma를 이용해서 반응형 사이즈에 따라 바뀌는 UI를 디자인하고, 공통으로 쓰이는 팝업창, 새로고침 컴포넌트 등을 작업했습니다. </p><br>`
            )}
            ${detailDescSet(
              '단속구간 기능 구현',
              `${contentImgSet(
                'https://images2.imgbox.com/fc/eb/5xX7b2M5_o.jpg',
                '24vw'
              )}<p>카카오맵 API를 이용해 지도를 그려낸 다음, 무인 교통 단속카메라 데이터(CSV)를 기반으로 단속 구간 위치와 단속 속도를 표시했습니다. 가독성을 높이기 위해 속도별로 마커를 별도 제작했으며 줌 인 & 아웃에 따라 마커를 그룹화하는 클러스터러 메서드를 활용했습니다. 마커를 한 번 더 클릭할 시 상세 주소를 볼 수 있습니다. </p><br>`
            )}
            `
          )}
        </div>
        <!---------------- 프로젝트 4 ---------------->
          <div style="height: fit-content; display: flex; flex-direction: column; align-items: center; padding: 3rem 0;">
          ${titleSet('TOY PROJECT #4')}
          ${imgSet('https://images2.imgbox.com/e1/c6/0VD765Dk_o.gif')}
          ${projectTitleAndDesc(
            projectTitleSet(
              '랜덤 뽑기 게임',
              'https://github.com/H-Choyoung/portfolio',
              'https://h-choyoung.github.io/my_project_find_the_treasure/',
              'https://images2.imgbox.com/41/ba/TeJymR0d_o.png',
              '40px'
            ),
            '개인 프로젝트로 작업한 보물찾기 게임입니다. 클릭시 확률에 따라 무작위로 내용물이 바뀝니다. 사용된 이미지는 모두 Figma로 제작했습니다.',
            stackContentsSet(
              'JavaScript',
              'React, styled-component',
              'Node.js',
              '',
              'git',
              'Visual Studio Code',
              'Figma',
              'Etc'
            ),
            '2022.12.26 ~ 2023.01.07',
            '개인 1명',
            `
            ${detailDescSet(
              'UI 디자인',
              `${contentImgSet(
                'https://images2.imgbox.com/82/e3/J0mVQJfR_o.jpg',
                '24vw'
              )}<p>와이어 프레임을 제작하면서 필요한 이미지들을 SVG파일로 분리했습니다.</p><br>`
            )}
            ${detailDescSet(
              '랜덤으로 바뀌는 관 색깔과 내용물',
              `<p>관 컴포넌트, 내용물 컴포넌트를 종류별로 분리한 뒤 내용물마다 일정 확률로 나올 수 있도록 JavaScript Math.random()함수를 사용했습니다.</p><br>`
            )}
            `
          )}
        </div>
    </div>
    `;
  }
}
