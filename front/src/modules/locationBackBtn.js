const backBtn = (location) => {
  return `
    <div style="display: flex; justify-content: center;
    align-items: center;
    position: absolute;
    top: 95%; left: 50%;
    transform:translate(-10%, -50%);
    cursor: pointer;
    opacity: 50%;"
    onclick="location.replace('${location}')"
    >
      <img src="/img/arrow_left.svg" 
      style="width: 65%;">
    </div>
    `;
};

export default backBtn;