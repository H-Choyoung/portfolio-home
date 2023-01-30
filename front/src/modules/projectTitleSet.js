const projectTitleSet = (
  title,
  githubLink,
  imgLink = '',
  imgSrc = '',
  imgW = '48px'
) => {
  return `
      <span style="display: flex; align-items: center;">
        <p style="font-size:24pt; font-weight:bold; color: #fff; padding: 1.7rem 0 1.7rem 0;">${title}</p>
        <a href="${githubLink}" target="_blank" style="display: flex; align-items: center;"><img src="/img/github.svg" style="width: 48px; padding-left: 1rem;"></a>
        <a href="${imgLink}" target="_blank" style="display: flex; align-items: center;"><img src="${imgSrc}" style="width: ${imgW}; padding-left: 0.5rem;"></a>
      </span>
      `;
};

export default projectTitleSet;