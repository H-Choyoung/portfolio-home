const slideEvent = () => {
  const projectsContainer = document.getElementById('projectsContainer');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  
  rightBtn.addEventListener('click', () => {
    projectsContainer.innerHTML(`
      ${titleSet('TEAM PROJECT #2')};
      ${imgSet('')};
      ${projectTitleAndDesc(
        '프로젝트명2',
        '어쩌구저쩌구2',
        '스택은이런거 썼음2',
        '22.00.00 ~ 22.00.00',
        '0명',
        '내가 담당한 기능'
      )};
    `);
  });
};
// slideEvent();

export default slideEvent;