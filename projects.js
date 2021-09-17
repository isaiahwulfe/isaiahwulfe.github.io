const projectsHTML = 
'<div class="container-fluid" style="position: relative; top: 50%; transform: translate(0%, -50%);">' +
  '<div class="row">' +
    '<div class="col-3">' +

    '</div>' +
    '<div class="col-6">' +
      '<div class="card text-center" style="background-color: #090934;">' +
      '<div class="card-header">' +
        '<h3 class="card-header-text-alt">' +
          'Projects' +
        '</h3>' +
      '</div>' +
      '</div>' +
        '<div class="card-body" style="background-color: #F3F7D4;">' +
          '<div class="card-text">' +
            '<div class="card-title">' +
              '<h4 class="card-body-text-alt" style="text-align: center; padding: 5px;">' +
                'A Highlight of My Assignments from the MIT xPRO Bootcamp' +
              '</h4>' +    
            '</div>' +
            '<div class="card-subtitle mb-2 text-muted" style="text-align: center; padding: 5px;">' +
              '<h6 class="card-body-text-sub">' +
                'Fork my repo\'s and code with me!' +
              '</h6>' +              
            '</div>' +
            '<table class="table" style="background-color: white;">' +
              '<thead>' +
                '<tr>' +
                  '<th scope="col">' +
                    'Icon' +
                  '</th>' +
                  '<th scope="col">' +
                    'Title' +
                  '</th>' +
                  '<th scope="col">' +
                    'Link' +
                  '</th>' +
                  '<th scope="col">' +
                    'Description' +
                  '</th>' +
                '</tr>' +
              '</thead>' +
              '<tbody>' +
                '<tr>' +
                  '<th scope="row">' +
                    '<img src="./PacMan1.png" style="width: 25px; height: auto;">' +
                  '</th>' +
                  '<td>Pac Men</td>' +
                  '<td>' +
                    '<a href="https://github.com/isaiahwulfe/Pac-Men" target="blank" class="card-link">' +
                    'GitHub' +
                    '</a>' +  
                  '</td>' +
                  '<td>' +
                    'Generates random, moving Pac Men' +
                  '</td>' +
                '</tr>' +
                '<tr>' +
                  '<th scope="row">' +
                    '<img src="./oneeye.png" style="border-radius: 50%; width: 25px; height: auto;">' +
                  '</th>' +
                  '<td>' +
                    'Eye Movement' +
                  '</td>' +
                  '<td>' +
                    '<a href="https://github.com/isaiahwulfe/Eyes" target="blank" class="card-link">' +
                    'GitHub' +
                    '</a>' +
                  '</td>' +
                  '<td>' +
                    'An eye that follows mouse movement' +
                  '</td>' +
                '</tr>' +
                '<tr>' +
                  '<th scope="row">' +
                    '<img src="./bus.png" style="border-radius: 50%; width: 25px; height: auto;">' +
                    '</th>' +
                    '<td>' +
                      'Real Time Bus Tracker' +
                    '</td>' +
                    '<td>' +
                      '<a href="https://github.com/isaiahwulfe/Real-Time-Bus-Tracker" target="blank" class="card-link">' +
                        'GitHub' +
                      '</a>' +
                    '</td>' +
                    '<td>' +
                      'A map that tracks 4 Valley Metro Buses' +
                    '</td>' +
                  '</tr>' +
                '</tbody>' +
              '</table>' +
            '</div>' +
          '</div>' +
          '<div class="card-footer" style="background-color: #090934;">' +
            
          '</div>' +
          '<hr style="border-top: 35px solid #090934;">' +
          '<hr style="border-top: 25px solid #090934;">' +
          '<hr style="border-top: 20px solid #090934;">' +
        '</div>' +
        '<div class="col-3">' +
            
        '</div>' + 
      '</div>' +
    '</div>';

function injectProjects() {
    element = document.getElementById('projects');
    element.innerHTML += projectsHTML;
}

injectProjects();