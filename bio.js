const bioVidHTML =
  `<div class="bio-section"> 
      <h1 class="body-heading-text" style="padding-bottom: 2rem;"> 
        Please, allow me to introduce myself... 
      </h1>  
      <iframe width="100%" height="400em" src="https://www.youtube.com/embed/tQORIiNhQrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      <hr style="border-top: 35px solid #FD4D0C;"> 
      <hr style="border-top: 25px solid #FD4D0C;"> 
      <hr style="border-top: 20px solid #FD4D0C;"> 
    </div>`; 

function injectBioVid() {
    element = document.getElementById('bio-vid');
    element.innerHTML = bioVidHTML;
}

injectBioVid();