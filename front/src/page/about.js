export default class {
  constructor() {
    document.title = "ABOUT";
  }
  async getHtml() {
    const titleSet =(titleName)=> {
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
        <div class="lines">
          <div class="line" 
          style=" width: 50vw;
          border-bottom: 1px solid #D9D9D9;
          "></div>
          <div class="circle" 
          style="width:14px; height:14px; border-radius:50%; background-color:#D9D9D9;
          position: relative;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          "></div>
        </div>
      </section>
      `;
    }
    return `
    /* ABOUT ME */
    <div id="allContainer"
      style="
      display: flex;
      align-items: center;
      flex-direction: column;
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
          padding-bottom: 0.7rem;
          font-weight: 200;
          ">: 잡초같은 끈기의 개발자</p>
          <a href="https://github.com/H-Choyoung"><img src="/img/github.svg"></a>
        </div>
      </section>
    </div>
    /* MY SKILLS */
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
        width: 45%; 
        ">
        <img>
        </div>
      </section>
    </div>
  </div>
  `;
  }
}