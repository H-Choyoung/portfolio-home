import hover from "./hover.js";

const scrollEvent = () => {
  const main = document.querySelector('#main');
  const sideBtnPlace = document.querySelector('#sideBtnPlace');

  let test = ["1", "2", "3"];
  const sideMenus = (btnNums) => {
    let set = [];
    for (let num in btnNums) {
      const sideMenuBtn = `
        <div id="upBtn" 
          style="width:fit-content; height:fit-content; 
          border:1px solid #fff; 
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem;
          background-color:#333; 
          mix-blend-mode: difference; 
          opacity: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          <p style="color: #fff;
          font-family:'BIZ UDMincho',serif;
          font-size: 12pt;
          white-space: nowrap; padding: 0.3rem 1rem;
          cursor: pointer;">PROJECT #${btnNums[num]}</p>
        </div>
      `;
      set.push(sideMenuBtn);
    }
    const result = `      
      <div style="
      position: absolute;
      top: 50%; left: 9rem;
      transform: translate(0%, -50%);
      ">${set}</div>`;
    /* 현재 path 가져오기 */
    const curPath = window.location.pathname;
    if (curPath === '/PORTFOLIO') {
      sideBtnPlace.innerHTML = result;
    } else {
      sideBtnPlace.innerHTML = '';
    }
  };
  sideMenus(test); //버튼 만드는 함수 실행

  const sideMenus2 = () => {
    const btnNums = main.children[0].children.length;
    let set = [];
    for(let i=0; i<btnNums; i++){
      const sideMenuBtn = `
        <div id="upBtn" 
          style="width:fit-content; height:fit-content; 
          border:1px solid #fff; 
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem;
          background-color:#333; 
          mix-blend-mode: difference; 
          opacity: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          <p style="color: #fff;
          font-family:'BIZ UDMincho',serif;
          font-size: 12pt;
          white-space: nowrap; padding: 0.3rem 1rem;
          cursor: pointer;">PROJECT #${i+1}</p>
        </div>
      `;
      set.push(sideMenuBtn);
    }
    const result = `      
      <div style="
      position: absolute;
      top: 50%; left: 9rem;
      transform: translate(0%, -50%);
      ">${set}</div>`;
    /* 현재 path 가져오기 */
    const curPath = window.location.pathname;
    if (curPath === '/PORTFOLIO') {
      sideBtnPlace.innerHTML = result;
    } else {
      sideBtnPlace.innerHTML = '';
    }
  };
  
  /* 버튼 스크롤 클릭이벤트 */
  const btnLen = sideBtnPlace.children[0].children.length;
  // sideMenus2();
  for (let i = 0; i < btnLen; i++) {
    const targetBtns = sideBtnPlace.children[0].children[i]; //클릭이벤트 타겟 지정
    // console.log(btns);
    targetBtns.addEventListener('click', (e) => {
      const projectsContainer = main.children[0]; //스크롤될 화면 페이지
      const totalPageNums = projectsContainer.children.length; //한 번에 이동될 화면 단위 수
      for (let i = 0; i < totalPageNums; i++) {
        const targetPage = projectsContainer.children[i];
        const targetPageText = targetPage.children[0].children[0].innerText;
        const location = targetPage.offsetTop; //클릭시 이동될 좌표
        if (targetPageText.includes(e.target.innerText)) {
          // 클릭한 문자열이 일치할 때 해당 제목의 페이지로 이동
          projectsContainer.scrollTo({
            top: location,
            behavior: 'smooth',
          });
        }
      }
    });
  }
}
export default scrollEvent;