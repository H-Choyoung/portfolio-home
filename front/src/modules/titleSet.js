const titleSet = (titleName) => {
  return `
      <section class="sectionTitle"
        style="
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 3rem;
        ">
        <h3 
        style="font-family:'BIZ UDMincho',serif;
        font-size: 24pt; font-weight: normal;
        color: #fff;
        padding:0; margin: 1rem;
        "
        >${titleName}</h3>
        <div class="lines" 
        style="display: flex; align-items: center;">
          <div class="line" 
          style=" width: 30vw;
          border-bottom: 1px solid #D9D9D9;
          "></div>
          <div class="circle" 
          style="width:14px; height:14px; border-radius:50%; background-color:#D9D9D9;
          "></div>
          <div class="line" 
          style=" width: 30vw;
          border-bottom: 1px solid #D9D9D9;
          "></div>
        </div>
      </section>
      `;
};

export default titleSet;