import titleSet from '../modules/titleSet.js';
import sideMenus from '../modules/projectScrollBtns.js';
import backBtn from '../modules/locationBackBtn.js';

export default class {
  constructor() {
    document.title = 'DETAILS';
  }
  async getHtml() {
    sideMenus([]); //프로젝트 메뉴 버튼 렌더링 방지

    return `
    <div 
    style="font-family: 'BIZ UDMincho',serif;
    font-size: 14pt;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    ">
    ${titleSet('Project Detail View')}
      <div style="display: flex; justify-content: center; flex-direction: column;
      max-width: 60vw;">
      test
      </div>
    </div>
    ${backBtn("/PORTFOLIO")}
  `;
  }
}
