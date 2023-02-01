import titleSet from '../modules/titleSet.js';
import sideMenus from '../modules/projectScrollBtns.js';

export default class {
  constructor() {
    document.title = 'CONTACT';
  }
  async getHtml() {
    sideMenus([]); //프로젝트 메뉴 버튼 렌더링 방지

    const inputAlert = () => {
      const qr = document.querySelectorAll('.inputs');
      const form = document.querySelector('.gform');
      const submit = document.querySelector('.submit');
      // console.log(submit.onclick);
      for (let i = 0; i < qr.length; i++) {
        // 빈칸일 시 채워달라는 알림이 뜨는 이벤트
        submit.addEventListener('click', (e) => {
          if (qr[i].value.length == 0) {
            alert('내용을 입력해주세요');
            e.preventDefault(); //이벤트 중단
          } else {
            alert('전송 완료');
          }
        });
      }
    };

    return `
    <div 
    style="font-family: 'BIZ UDMincho',serif;
    font-size: 14pt;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    ">
    ${titleSet('Contact Me')}
    <div style="display: flex; justify-content: center; flex-direction: column;
    max-width: 60vw;">
    <form class="gform" method="POST" onclick=${inputAlert()} data-email="lll0858630@gmail.com" action="https://script.google.com/macros/s/AKfycbzYgwmNh6Pt_2xIB4PRyKWXNeDU8BPep22oJvTClODtHOYr_bGyGXZzcdUAs9h17vNaXg/exec" target="_blank">
      <div style="display: flex; padding: 0.8rem 0;">
        <label for="name" style="display: block; width: 80px; padding: 0.5rem 0;">name</label>
        <input class="inputs" type="text" name="name" id="name" style="display: block; width: 40vw; background-color:#d9d9d9; opacity: 50%; border: 0px;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        padding: 0.5rem 1rem;
        font-family: 'S-CoreDream-3Light';
        font-weight: 300;
        font-size: 12pt;
        " required>
      </div>
      <div style="display: flex; padding: 0.8rem 0; align-items: center;">
        <label for="message" style="display: block; width: 80px; padding: 0.5rem 0;">message</label>
        <textarea class="inputs" type="text" name="message" id="message" rows="10" cols="50" style="display: block; width: 40vw; max-width: 40vw; background-color:#d9d9d9; opacity: 50%; border: 0px;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        padding: 1rem 1rem;
        font-family: 'S-CoreDream-3Light';
        font-weight: 300;
        font-size: 12pt;
        " required></textarea>
      </div>
      <div style="display: flex; padding: 0.8rem 0;">
        <label for="email" style="display: block; width: 80px; padding: 0.5rem 0;">email</label>
        <input class="inputs" type="email" name="email" id="email" style="display: block; width: 40vw; background-color:#d9d9d9; opacity: 50%; border: 0px;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        padding: 0.5rem 1rem;
        font-family: 'S-CoreDream-3Light';
        font-weight: 300;
        font-size: 12pt;
        " required>
      </div>
      <div style="padding: 1rem 0;
      width: inherit;
      display: flex; justify-content: flex-end;
      ">
        <input class="submit" type="submit" value="SEND MAIL"
        style="display: block; 
        border: 1px solid #d9d9d9;
        background-color:#000;
        color: #d9d9d9;
        padding: 0.5rem 1rem;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        font-family: 'BIZ UDMincho',serif;
        font-size: 14pt;
        cursor: pointer;
        ">
      </div>
      <iframe name='blankifr' style='display:none;'></iframe>
    </form>
  </div>
  </div>
  `;
  }
}
