const sideMenus = (btnNums) => {
  // let test = [1, 2, 3, 4];
  let set = [];
  for (let num in btnNums) {
    const sideMenuBtn = `
        <div id="scrollBtn" 
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

export default sideMenus;