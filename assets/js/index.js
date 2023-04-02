let $container = document.getElementById('container');
let array = ["./assets/img/mosquito (1).png","./assets/img/mosquito (2).png","./assets/img/mosquito (3).png","./assets/img/mosquito (4).png","./assets/img/mosquito (5).png"];

let randomSelect = 0;
setInterval(() => {
    let $img = document.createElement('img')
    $img.setAttribute('src', array[randomSelect])
    $img.setAttribute('alt', "mosquito")
    randomSelect<4 ? randomSelect++ : randomSelect = 0
    $img.style.top = `${Math.floor(Math.random() * 100) + 1}%`;
    $img.style.left = `${Math.floor(Math.random() * 100) + 1}%`;
    console.log(Math.floor(Math.random() * 100) + 1)
    $container.appendChild($img);
}, 1000);

$container.addEventListener('click', function(e){
    $container.removeChild(e.target);
});

// Math.floor(Math.random() * 100) + 1