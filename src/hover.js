// const hover =(target, changeTarget, bgCol)=> {
//   target.addEventListener("mouseover", (event) => {
//   changeTarget.style.backgroundColor = bgCol;
//  }, false);
//   target.addEventListener("mouseout", (event) => {
//   changeTarget.style.backgroundColor = "#D9D9D9";
//  }, false);
// }
// console.log(hover);

const hover =(targets, eventTargets, bgCol)=> {
  const target = document.querySelectorAll(targets);
  const changeTarget = document.querySelectorAll(eventTargets);
  const text = document.querySelectorAll(".buttonTxt");
  // console.log(target)
  target.forEach((val,idx) => {
    target[idx].addEventListener("mouseover", (event) => {
    changeTarget[idx].style.backgroundColor = bgCol;
    changeTarget[idx].style.transition = "0.7s";
    target[idx].style.transition = "0.7s";
    target[idx].style.mixBlendMode = "difference";
   }, false);
    target[idx].addEventListener("mouseout", (event) => {
    changeTarget[idx].style.backgroundColor = "#D9D9D9";
    changeTarget[idx].style.transition = "0.7s";
    target[idx].style.transition = "0.7s";
    target[idx].style.mixBlendMode = "normal";
   }, false);
  });
}
export default hover;