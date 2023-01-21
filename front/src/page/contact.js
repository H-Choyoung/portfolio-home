import titleSet from "../modules/titleSet.js";

export default class {
  constructor() {
    document.title = 'CONTACT';
  }
  async getHtml() {
    return `<div 
    style="font-family:'KyoboHandwriting2021sjy';
    font-size: 14pt;
    color: #fff;
    ">
    ${titleSet("Contact Me")}
  </div>`;
  }
}
