const root = document.getElementById("root");

/* 태그 설정 */
root.innerHTML = `
<div id="side">
  <img id="sideImg" src="/img/side.png"></img>
</div>
<div id="main">
  <img id="mainImg" src="/img/main.svg"></img>
</div>
<div id="menu">
  <div id="buttons">
    <p class="menuText">Have A Good Day...<br>　Have A Good Day...</p>
  </div>
</div>`;
const side = document.getElementById("side");
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const buttons = document.getElementById("buttons");
const menuTxt = document.getElementsByClassName("menuText");

const makeButtons =(parent)=> {
  // 메뉴 버튼
  const menus = ["ABOUT", "PORTFOLIO", "CONTACT", "ETC", "MAIN"]
  menus.forEach((val, idx) => {
    const button = `
    <div class="buttonContainer${idx+1}"
    >
      <div class="buttonBody"
      style="width:90px; height:47px; 
      border:1px solid #D9D9D9; 
      border-radius:50%; 
      background-color:#000; 
      display: flex;
      justify-content: center;
      align-items: center;
      rotate: -20deg;
      position: relative;
      top: 47px;
      right: 50px;
      z-index: 2;
      ">
      <p style="color:#fff; font-family:'BIZ UDMincho',serif; font-size:11pt">${val}</p>
      </div>
      <div class="buttonBack" 
      style="position: relative;
      right: 33px;
      top: 7px;
      z-index: 1;
      width:85px; height:47px; 
      rotate: -20deg;
      border-radius:50%;
      background-color:#D9D9D9; 
      mix-blend-mode: difference; 
      "></div>
    </div>`
    parent.innerHTML += button;
  })
}
makeButtons(buttons);

/* 기본 스타일 설정 */
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundImage = "url('/img/back.png')";
root.style.backgroundRepeat = "no-repeat"
root.style.display = "flex"
root.style.justifyContent = "space-between"
root.style.overflow = "clip"

/* 왼쪽 장식부분 스타일 설정 */
side.style.width = "fit-content";
side.style.height = "inherit";
const sideImg = document.getElementById("sideImg");
sideImg.style.height = "inherit";

/* 오른쪽 메뉴부분 스타일 설정 */
menu.style.width = "75px";
menu.style.padding = "3rem 0";
menu.style.borderLeft = "1px solid #D9D9D9"; 
// 메인 버튼 스타일 설정
const mainButton = document.getElementsByClassName("buttonContainer5");
console.log(mainButton[0])
mainButton[0].style.padding = "0" //초기화
mainButton[0].style.paddingTop = "19rem"
// 메뉴 장식용 텍스트 스타일 설정
menuTxt[0].style.color = "#fff"
menuTxt[0].style.position = "absolute";
menuTxt[0].style.rotate = "90deg";
menuTxt[0].style.right = "-1rem";
menuTxt[0].style.bottom = "13rem";
menuTxt[0].style.fontFamily = "'Blinker', sans-serif";
menuTxt[0].style.fontSize = "10pt";

/* 메인 스타일 설정 */
// main.style.width = "90%";
// main.style.height = "90%";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
// 메인 이미지 스타일 설정
const mainImg = document.getElementById("mainImg");
mainImg.style.width = "90%";