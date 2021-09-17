const contactHTML = 
'<div class="container-fluid" style="position: relative; top: 50%; transform: translate(0%, -50%);">' +
  '<div class="row">' +
    '<div class="col">' +
      '<div style="position: relative; top:50%; transform: translate(0%, -35%);">' +
        '<h1 class="body-heading-text" style="padding-bottom: 25px;">' +
          'Me In 3' +
            '<hr width="50%" style="border-top: 10px solid #FD4D0C; left: 50%; transform: translate(50%, 0%);">' +
          '</h1>' +
        '</div>' +     
      '</div>' +
    '</div>' +
  '<div class="row">' +
    '<div class="col">' +
          
    '</div>' +
    '<div class="col">' +
      '<div class="card text-center" style="background-color: #090934;">' +
        '<div class="card-header">' +
          '<h3 class="card-header-text">' +
            'My Portrait' +  
          '</h3>' +  
        '</div>' +
      '</div>' +
    '<div class="card-body" style="background-color: #F3F7D4;">' +
      '<div class="card-text">' +   
        '<img src="./indeximg.png" style="width: 200px; height: auto; position: relative; left: 50%; top: 50%; transform: translate(-50%, 0%); filter: drop-shadow(0 0 .1rem rgb(203, 228, 50));">' +
      '</div>' +
    '</div>' +
  '</div>' +
    '<div class="col">' +
      '<div class="card text-center" style="background-color: #090934;">' +
        '<div class="card-header">' +
          '<h3 class="card-header-text">' +
            'My Bio' +
          '</h3>' +
        '</div>' +
      '</div>' +
      '<div class="card-body" style="background-color: #F3F7D4;">' +
        '<div class="card-text">' +
          '<p class="card-body-text">' +
            'Hi! My name is Isaiah.' +
          '</p>' +
          '<p class="card-body-text">' +
            'I am currently attending the MIT xPRO Full Stack Development Bootcamp, studying the MERN stack. I’m a very creative person and I have a lot of experience with all kinds of digital arts, especially music production and graphic design. It has been really amazing to open up the doors of web development and find something that I truly love to do.' +
          '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="col">' +
      '<div class="card text-center" style="background-color: #090934;">' +
        '<div class="card-header">' +
          '<h3 class="card-header-text">' +
            'Contact Info' +
          '</h3>' +
        '</div>' +
      '</div>' +
      '<div class="card-body" style="background-color: #F3F7D4;">' +
        '<div class="card-text">' +
          '<ol class="list-group">' +
            '<li class="list-group-item d-flex justify-content-between align-items-start">' +
              '<div class="ms-2 me-auto">' +
                '<div class="fw-bold">' +
                  'GitHub Username:' +
                '</div>' +
                  '<a class="card-link" href="https://github.com/isaiahwulfe/isaiahwulfe.github.io" target="blank">isaiahwulfe</a>' +
                '</div>' +
                '</li>' +
                '<li class="list-group-item d-flex justify-content-between align-items-start">' +
                  '<div class="ms-2 me-auto">' +
                    '<div class="fw-bold">' +
                      'Connect:' +
                    '</div>' +
                      '<a class="card-link" href="https://www.linkedin.com/in/ericseanjohnson" target="blank">LinkedIn</a>' +
                  '</div>' +
                '</li>' +
                '<li class="list-group-item d-flex justify-content-between align-items-start">' +
                  '<div class="ms-2 me-auto">' +
                    '<div class="fw-bold">' +
                      'Best Contact:' +
                    '</div>' +
                      'isaiahawulfe@gmail.com' +
                  '</div>' +
                '</li>' +
              '</ol>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="col">' +
          
        '</div>' +
      '</div>' +
    '</div>';

function injectContactHTML() {
    element = document.getElementById('bio-cards');
    element.innerHTML += contactHTML;
}

injectContactHTML();