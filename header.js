const html =  
`<div class="container-fluid"> 
<div class="row" style="background-image: var(--bs-gradient); background-color: #2E2FE3;"> 
  <div class="col"> 
    <a href="./index.html"> 
      <img class="header-image" src="./indeximg.png"> 
    </a> 
  </div> 
</div> 
<div class="row" style="background-color: #2E2FE3;"> 
  <div class="col"> 
    <div class="header-text"> 
      <h1> 
        Isaiah A. Wulfe 
      </h1> 
    </div> 
  </div> 
</div> 
</div> 
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #CBE432" aria-label="Twelfth navbar example"> 
<div class="container-fluid"> 
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation"> 
    <span class="navbar-toggler-icon"></span> 
  </button> 
  <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10"> 
    <ul class="navbar-nav"> 
      <li class="nav-item"> 
        <a class="nav-link active" aria-current="page" href="./bio.html">Bio</a> 
      </li> 
      <li class="nav-item"> 
        <a class="nav-link" href="https://www.linkedin.com/in/ericseanjohnson" target="_blank">LinkedIn</a> 
      </li> 
      <li class="nav-item dropdown"> 
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">MIT xPRO Projects</a> 
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
          <li><a class="dropdown-item" href="./projects.html">Projects Home Page</a></li> 
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/Pac-Men/" target="blank">Pac-Man</a></li> 
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/Eyes/" target="blank">Eye Movement</a></li> 
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/Real-Time-Bus-Tracker/" target="blank">Real Time Bus Tracker</a></li>
          <li><h6 class="dropdown-header">React Apps</h6></li> 
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/ToDo-List/" target="blank">ToDo List</a></li>
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/ATM-Machine/" target="blank">ATM Machine</a></li>
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/dictionary/" target="blank">Merriam-Webster API Dictionary</a></li>
          <li><a class="dropdown-item" href="https://isaiahwulfe.github.io/TikTakToe/" target="blank">TikTakToe</a></li>
          <li><a class="dropdown-item" href="http://isaiah-wulfebankingapplication.s3-website-us-west-1.amazonaws.com/" target="blank">Bad Bank</a></li>
        </ul> 
      </li> 
      <li class="nav-item"> 
        <a class="nav-link" href="./independent-projects.html">Independent Projects</a> 
      </li> 
      <li class="nav-item"> 
        <a class="nav-link" href="./contact.html">Contact</a> 
      </li> 
    </ul> 
  </div> 
</div> 
</nav>`;

function inject () {
    element = document.getElementById('header-module');
    element.innerHTML += html;
}

inject();