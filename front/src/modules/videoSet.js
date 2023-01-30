const videoSet = (src, width, height, radiusSize) => {
  return `   
      <span style="display: flex; flex-direction:column;justify-content:center; align-items:center;">        
      <video controls style="
        border-top-left-radius: ${radiusSize};
        border-top-right-radius: ${radiusSize};
        border-bottom-left-radius: ${radiusSize};
        border-bottom-right-radius: ${radiusSize};
        border: 1px solid #d9d9d9;
        width:${width}; height:${height};
        ">
        <source src="${src}" type="video/mp4">
      </video>
      <a href="${src}" target="_blank" style="font-family: 'S-CoreDream-3Light';font-size: 11pt; color: grey; text-decoration: none; padding-top: 0.5rem;">재생이 되지 않는다면 클릭해주세요.</a>
      </span>`;
};

export default videoSet;