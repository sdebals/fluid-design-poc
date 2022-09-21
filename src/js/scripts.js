const updateValues = () => {
    let pageWidth = window.innerWidth;

    let heading2 = document.querySelector('h2');
    let heading2Width = window.getComputedStyle(heading2);

    let heading3 = document.querySelector('h3');
    let heading3Width = window.getComputedStyle(heading3);
  
    document.querySelector('.window').innerText = pageWidth + 'px';
    document.querySelector('.actualh2').innerText = heading2Width.fontSize;
    document.querySelector('.actualh3').innerText = heading3Width.fontSize;
    
    //checkWidth(elemWidth);
  }
  
  const checkWidth = (elemWidth) => {
    //const maxVal = parseInt(document.querySelector('.max').innerText, 10);
    //const minVal = parseInt(document.querySelector('.min').innerText, 10);
    
    /*if (elemWidth === maxVal) {
      document.querySelector('.min').classList.remove('highlight');
      document.querySelector('.ideal').classList.remove('highlight');
      document.querySelector('.max').classList.add('highlight');
    } else if (elemWidth === minVal) {
      document.querySelector('.max').classList.remove('highlight');
      document.querySelector('.ideal').classList.remove('highlight');
      document.querySelector('.min').classList.add('highlight');
    } else {
      document.querySelector('.max').classList.remove('highlight');
      document.querySelector('.min').classList.remove('highlight');
      document.querySelector('.ideal').classList.add('highlight');
    }*/
  }
  
  updateValues();
  window.onresize = updateValues;