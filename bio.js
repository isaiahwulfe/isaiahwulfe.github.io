const bioVidHTML =
  '<div class="container-fluid">' +
    '<div class="row">' +
      '<div class="col">' +
            
      '</div>' +
      '<div class="col">' +
        '<div style="position: relative; top:50%; transform: translate(0%, -35%);">' +
          '<h1 class="body-heading-text" style="padding-bottom: 25px;">' +
            'Please, allow me to introduce myself...' +
          '</h1>' + 
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/tQORIiNhQrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
          '<hr style="border-top: 35px solid #FD4D0C;">' +
          '<hr style="border-top: 25px solid #FD4D0C;">' +
          '<hr style="border-top: 20px solid #FD4D0C;">' +
        '</div>' +
      '</div>' +
      '<div class="col">' +
          
      '</div>' +  
    '</div>' +
  '</div>'; 

function injectBioVid() {
    element = document.getElementById('bio-vid');
    element.innerHTML += bioVidHTML;
}

injectBioVid();