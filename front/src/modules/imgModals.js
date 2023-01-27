const imgModals =(src)=> {
  const img = document.querySelector(".img");
  // console.log(imgPlace);
  const htmls = `
  <img src=${src} class="img" style="
    width: auto;
    cursor: pointer;
    transition: 0.3s;
  ">
  <div class="modal">
    <span class="close">&times;</span>
    <img class="modal_content" id="img01">
  </div>
  `;
  return htmls;
  // imgPlace.innerHTML = htmls;
}
export default imgModals;