import sideMenus from '../modules/projectScrollBtns.js';

export default class {
  constructor() {
    document.title = 'ETC';
  }
  async getHtml() {
    sideMenus([]); //프로젝트 메뉴 버튼 렌더링 방지

    return `<div 
    style="font-family:'KyoboHandwriting2021sjy';
    font-size: 14pt;
    color: #fff;
    ">준비 중입니다. 
  </div>`;
  }
}
