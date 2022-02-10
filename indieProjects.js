const indieURL = `
    <div class="indie">
        <h1 class="body-heading-text">Coming Soon</h1>
    </div>
`

const injector = () => {
    element = document.getElementById('independent-projects');
    element.innerHTML = indieURL;
}

injector();