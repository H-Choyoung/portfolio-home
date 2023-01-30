const projectTitleAndDesc = (
  projectTitleSet,
  content,
  stack,
  period,
  member,
  detailDescSet
) => {
  return `
      <div class="titleDescContainer" style="
      display: flex; align-items: center; flex-direction: column;
      max-width: 45vw;
      font-family: 'S-CoreDream-3Light';
      font-weight: 300;
      font-size: 16pt;
      ">
      ${projectTitleSet}
      <div style="
      display: flex; justify-content: space-between; width: 60vw;">
      <div class="menuAndContents">
        <div class="menus" 
        style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 26vw;
        border: 1px solid #d9d9d9; 
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background-color: #000; 
        mix-blend-mode: difference;">
          <p style="color: #fff; font-weight: bold; white-space: nowrap; padding: 0.3rem 6rem;">프로젝트 상세</p>
        </div>
        <div class="descContainer" style="
        padding: 1.5rem 1rem;
        width: 26vw;
        ">
          <div class="descs" style="color: #d9d9d9;font-size: 14pt; line-height: 130%;
          display: flex; flex-direction: column;">
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">내용 상세</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${content}</span>
            </div>
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">사용 스택</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${stack}</span>
            </div>
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">진행 기간</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${period}</span>
            </div>
            <div style="padding-bottom: 0.7rem;">
              <span style="font-weight: bold;">참여 팀원</span>
              <span style="border-right: 2px solid #d9d9d9;margin: 0 10px 0 6px;"></span>
              <span>${member}</span>
            </div>
          </div>
        </div>
        </div>
      <div class="menuAndContents">
        <div class="menus"  
        style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 26vw;
        border: 1px solid #d9d9d9; 
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background-color: #000; 
        mix-blend-mode: difference;">
          <p style="color: #fff; font-weight: bold; white-space: nowrap; padding: 0.3rem 6rem;">담당 작업</p>
        </div>
        <div class="descContainer" style="
        padding: 1.5rem 1rem;
        width: 26vw;
        ">
          ${detailDescSet}
        </div>
      </div>
      </div>
      </div>
      `;
};

export default projectTitleAndDesc;