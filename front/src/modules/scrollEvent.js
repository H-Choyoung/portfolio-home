import hover from "./hover.js";

const scrollEvent = () => {
  const main = document.querySelector('#main');
  const side = document.querySelector('#side');
  const sideBtnPlace = document.querySelector('#sideBtnPlace');

  let test = [1, 2, 3];
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
      top: 50%; left: 10rem;
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
  sideMenus(test); //버튼 만드는 함수

  // sideBtnPlace.addEventListener('click', (e) => {
  //   const projectsContainer = main.children[0];
  //   const totalPageNums = projectsContainer.children.length; //3
  //   // console.log(projectsContainer.children);
  //   for(let i=1; i<totalPageNums; i++){
  //     const btns = projectsContainer.children[i];
  //     const location = projectsContainer.children[i].offsetTop;
  //     console.log(location);
  //     // projectsContainer.scrollTo({
  //     //   top: location,
  //     //   behavior: 'smooth',
  //     // });
  //   };
  // });
  const btnLen = sideBtnPlace.children[0].children.length;
  for (let i = 0; i < btnLen; i++) {
    const targetBtns = sideBtnPlace.children[0].children[i];
    // console.log(btns);
    targetBtns.addEventListener('click', (e) => {
      console.log(e.target.innerText);
      console.log(e.target)

      const projectsContainer = main.children[0];
      const totalPageNums = projectsContainer.children.length; //3
      for (let i = 0; i < totalPageNums; i++) {
        const btns = projectsContainer.children[i];
        const btnsText = btns.children[0].children[0].innerText;
        const location = projectsContainer.children[i].offsetTop;
        // console.log(location);
        console.log();

        // projectsContainer.scrollTo({
        //   top: location,
        //   behavior: 'smooth',
        // });
      }
    });
  }


}
  // sideBtnPlace.addEventListener('click', (e) => {
  //   const projectsContainer = main.children[0];
  //   const totalPageNums = projectsContainer.children.length;
  //   const location = projectsContainer.children[1].offsetTop;
  //   // console.log(location);
  //   projectsContainer.scrollTo({
  //     top: location,
  //     behavior: 'smooth',
  //   });
  // });
export default scrollEvent;