const contents = `
  <div 
    style="font-family:'KyoboHandwriting2021sjy';
    font-size: 14pt;
    color: #fff;
    ">ABOUT
  </div>
  `
export default class {
  constructor() {
    document.title = "MAIN";
  }
  async getHtml() {
    return contents;
  }
}