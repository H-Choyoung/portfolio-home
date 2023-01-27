const locationBtns =(location)=> {
  return `
  <div id="locationBtn" 
    onclick="location.replace('${location}')"
    style="width:fit-content; height:fit-content; 
    border:1px solid #fff; 
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: #333; 
    mix-blend-mode: difference; 
    opacity: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    padding: 0.3rem 1rem;
  ">
    <img src="/img/arrow_right2.svg" style="width: 21px">
    <p style="color: #fff;
    font-family: 'S-CoreDream-3Light';
    font-weight: 300;
    font-size: 12pt;
    white-space: nowrap; 
    padding-left: 0.7rem;
    cursor: pointer;">자세히 보기</p>
  </div>
  `;
}

export default locationBtns;
