const detailDescSet = (title, content) => {
  return `  
      <div class="descs" style="color: #d9d9d9;font-size: 14pt; line-height: 130%;">
        <span id="imgPlace"></span>
        <span style="font-weight: bold;">${title}</span>
        <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
        <span>${content}</span>
      </div>`;
};

export default detailDescSet;