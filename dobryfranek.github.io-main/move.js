window.onload = function() {
    const img = document.createElement("img");
    img.src = "lorem.gif";
    img.style.position = "absolute";

    document.body.appendChild(img);

    let x, y, xSpeed, ySpeed;

    const updateSizeAndPosition = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        img.width = `${windowWidth * 0.457421875}`; 
        img.style.height = "auto"; 

        x = (windowWidth - img.clientWidth) / 2;
        y = 0;
        xSpeed = Math.random() + 3;
        ySpeed = Math.random() + 3;

        if (Math.random() >= 0.5) {
            xSpeed = -xSpeed;
        }
        if (Math.random() >= 0.5) {
            ySpeed = -ySpeed;
        }

        bounce();
    };

    function bounce() {
        ySpeed += 0.1;
        x += xSpeed;
        y += ySpeed;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (x + img.clientWidth + 1 >= windowWidth || x <= 0) {
            xSpeed = -xSpeed;
        }

        if (y + img.clientHeight + 2 >= windowHeight || y <= 0) {
            ySpeed = -1.01 * ySpeed;
        }

        img.style.left = x + "px";
        img.style.top = y + "px";

        requestAnimationFrame(bounce);
    }

    img.onload = updateSizeAndPosition;
    window.onresize = updateSizeAndPosition;
}
