window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#c9772b",
        "#d3d160",
        "#d14f60",
        "#e45f4d",
        "#58e971",
        "#c526ec"
    ];

    //sound function
    pads.forEach((pad,  index)=>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBall(index);
        });
    });

    //visual function
    const createBall = (index) => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = 'jump 1s ease';
        ball.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});