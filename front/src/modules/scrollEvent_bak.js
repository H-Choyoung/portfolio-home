import hover from "./hover.js";

const scrollEvent = () => {
  const side = document.querySelector('#side');
  const sideBtnPlace = document.querySelector('#sideBtnPlace');
  const sideMenuBtn = `
  <div style="
  position: absolute;
  top: 50%; left: 10rem;
  transform: translate(0%, -50%);
  ">
    <div id="upBtn" 
      style="width:30px; height:30px; 
      border:1px solid #fff; 
      border-radius:50%; 
      background-color:#555; 
      mix-blend-mode: difference; 
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    ">
    <img src="/img/arrow-down.svg" style="width:25px; rotate:180deg;">
    </div>
    <div id="downBtn" 
      style="width:30px; height:30px; 
      border:1px solid #fff; 
      border-radius:50%; 
      background-color:#555; 
      mix-blend-mode: difference; 
      display: flex;
      justify-content: center;
      align-items: center;
      ">
      <img src="/img/arrow-down.svg" style="width:25px;">
      </div>
    <div>
  `;
    const curPath = window.location.pathname;
    if (curPath === '/PORTFOLIO') {
      sideBtnPlace.innerHTML = sideMenuBtn;
    } else {
      sideBtnPlace.innerHTML = '';
    }
  // console.log(window.location.pathname);
  sideBtnPlace.addEventListener('click', (e) => {
    const main = document.querySelector('#main');
    const projectsContainer = main.children[0];
    const totalPageNums = projectsContainer.children.length;
    const location = projectsContainer.children[1].offsetTop;
    console.log(location);
    projectsContainer.scrollTo({
      top: location,
      behavior: 'smooth',
    });
  });
}

export default scrollEvent;