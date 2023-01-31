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
      <div class="stacks" style="font-family:Inconsolata;white-space: normal; padding: 0.3rem 0;">
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>Language</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${Lang}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>Framework / Library</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${frameOrLib}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>Develop Server</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${server}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>Database</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${database}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>Cooperation Tools</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${cooperation}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>IDE</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${ide}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>Design & Architecture</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${design}</span>
        </p>
        <p style="display:flex; align-items:center; padding: 0.2rem 0;">
          <span class="stackCate" 
          style="display: flex; text-align: center; padding: 0.2rem 0;
          color: #000; background-color: #d9d9d9;      
          border-top-left-radius: 2rem;
          border-top-right-radius: 2rem;
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem; 
          padding: 0.1rem 1rem;
          mix-blend-mode: difference;">
          <span>${etcName}</span></span>
          <img src="/img/arrow_right_1.svg" style="width: 17px; margin: 0 0.5rem;">
          <span class="stackNames">${etcCon}</span>
        </p>
      </div>
      `;
};
export default stackContentsSet;