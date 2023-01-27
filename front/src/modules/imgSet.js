const imgSet = (imgSrc, width) => {
  return `
    <img src="${imgSrc}" 
    style="width: ${width};
    margin: 0.5rem 0;
    border: 1px solid #d9d9d9;">
    `;
};

export default imgSet;