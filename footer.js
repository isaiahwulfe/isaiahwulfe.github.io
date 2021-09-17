const footerHTML = 
'<div class="container-fluid">' +
  '<div class="row">' +
    '<div class="col">' +
      '<p>' +
        'Written in VS Code' +
      '</p>' +
      '<p>' +
        'Built with Bootstrap' +
      '</p>' +
      '<p>' +  
        'Fonts from Google Fonts' +
      '</p>' +
    '</div>' +
      '<div class="col">' +
        '<p>' +
          'Graphic and Web Design by Isaiah A. Wulfe' +
        '</p>' +
        '<p>' +  
          '2021' +
        '</p>' +  
        '<p>' +  
          'Thanks for stopping by!' +
        '</p>' +
      '</div>' +
      '<div class="col">' +
        '<p>' +
          '“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”' +
        '</p>' +
        '<p>' +    
          '― Marcus Aurelius, Meditations' +
        '</p>' +  
      '</div>' +
    '</div>' +
  '</div>';

function injectFooter() {
    element = document.getElementById('footer');
    element.innerHTML += footerHTML;
}

injectFooter();