    var pos = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
        ];
    var direction = 0;
    var focus = 0;
    var xMax = 660;
    var xMin = 0;
    
    const area3 = {
    element: document.getElementById('area3'),
    width: 660,
    height: 212,
    };

    function initialize() {
        area3.element.style.width = area3.width + 'px';
        area3.element.style.height = area3.height + 'px';
        document.body.appendChild(area3.element);
    };

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
        setTimeout(Run, 200);
    };

    function checkPageBounds(direction, imgWidth) {
        //
        // Complete this to reverse direction on hitting page bounds
        // 

        if (pos > xMax - 210){
            direction += 1;
        }
        if (pos === xMin){
            direction = 0;
        }

        return direction;
    };
    
    initialize();

    if (typeof module !== 'undefined') {
        module.exports = { update, create, changeDirectionIfNecessary, moveTo, area3 };
      }