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
        padding: 2rem 0;
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
          style=" width: 60vw;
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
    };
    const imgSet =(imgSrc)=> {
      return `
      <img src="${imgSrc}" 
      style="width: 60vw;  
      border: 1px solid #d9d9d9;">
      `;
    }
    const projectTitleAndDesc = (title, content, stack, period, member, myContent) => {
      return `
      <div class="titleDescContainer" style="
      display: flex; align-items: center; flex-direction: column;
      max-width: 45vw;
      font-family: 'S-CoreDream-3Light';
      font-weight: 300;
      font-size: 16pt;
      ">
      <p style="font-size:24pt; font-weight:bold; color: #fff; padding: 0.5rem 0 1.5rem 0;">${title}</p>
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
      `;
    };
    return `
    <div style="display: flex; flex-direction: column; align-items: center;">
      ${titleSet('TEAM PROJECT #1')};
      ${imgSet(
        'https://lh3.googleusercontent.com/y1zoXxv6VkTJzuW9Pb2sBQ6kqIrHhOF2F1eaf232sC08wRwVNhTI1aPuNvUK9WN61rQ5L_0upLSaR-MEAl1TS8Tij0s0v0LAXKScWkEfHzyYHddChOU8CJTmnij3oKqabMv99ME-mihPtZUz7lkNizSNnc6PQETCoyLSgVMHPeylwpLO-BmqAv2FqkD3gvmGcgxpVB4VKqVDoai0SJSJPF40xxcZcCFky5A0sUgDFVikCosIA0glzb3ngw4cHWF_nnzLYqzaiRFRyjNzYzojbOG_XaD0YXw2AweihzdJSZK1gK2zUNx-ScX-LmnLqeDddOFqj2yg2U0zv2z6VV0gAi1YsnA_3b6ZqOjBLAUOFpgWYNHj5FDIN_KoEgVDAh6WZQIvjORb-8zxoBpUQg47tRaHIuX_kPfkCuSqyH3YmnFa1R4Rtl61o9m1YVD0_fgQfgWCElT7F1O8I4mG27rfrBVjp5hJhGvCUemdj964750l5aMN4BykZqtEpe3CLVxnQEEyBn3Dil2OZB8MJqHm0i3JEj32NVIjaa5am5ERCKIJAuxqf_17dj2qbHZ4aBlgzlVxocqMcoZ71_oTmt_tHViXdSmqlnze4dSikiq9hAVtbbjWwR7N2zEeftHCRsCgdYMQ_1Bnv6d9k5JE4OK824MSP4-PLxRB8rjPhOkjVPmnAPB3FRM-D6tilDyIfpuuMFoxTfnCBqfEfb_Phexxsb3NBzt_Zq3xSYffAnCAIJFS6U0PpMsNb9H72sx6o22Gh4MzaBZHmusnLsPwDjPdjLsh7dVR1ruQtih6KoTbxJ5YBXxmEi_ik1VQuaECwgMa_tvOJ_dMUlxwm3ymEdqtG47G6LHmwYEqc5Mvmf2GUXPOL8YwePCtHf1OQrbTg22dU-IGwXySQtq38lAE_qbwWCclXdzN5AGv_uOBNccxu2l0H7SnBcy72MYPD1chqcNYOF3YWB0nZmOFYmaeGjw=w955-h438-no?authuser=1'
      )};
      ${projectTitleAndDesc(
        '프로젝트명',
        '어쩌구저쩌구',
        '스택은이런거 썼음',
        '22.00.00 ~ 22.00.00',
        '0명',
        '내가 담당한 기능'
      )}
    </div>
    `;
  }
}
