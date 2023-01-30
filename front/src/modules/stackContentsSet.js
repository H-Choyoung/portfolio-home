const stackContentsSet = (
  Lang,
  frameOrLib,
  server,
  database,
  cooperation,
  ide,
  design,
  etcName = '',
  etcCon=''
) => {
  return `
      <div class="stacks" style="font-family:Inconsolata;white-space: normal;">
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">Language</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${Lang}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">Framework / Library</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${frameOrLib}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">Develop Server</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${server}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">Database</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${database}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">Cooperation Tools</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${cooperation}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">IDE</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${ide}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">Design & Architecture</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${design}</span>
        </p>
        <p style="display:flex; align-items:center;">
          <span class="stackCate" 
          style="font-weight: 600;">${etcName}</span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${etcCon}</span>
        </p>
      </div>
      `;
};
export default stackContentsSet;