let $container = document.getElementById('container');
let array = ["./assets/img/mosquito (1).png","./assets/img/mosquito (2).png","./assets/img/mosquito (3).png","./assets/img/mosquito (4).png","./assets/img/mosquito (5).png"];

let randomSelect = 0;
setInterval(() => {
    let $img = document.createElement('img')
    $img.setAttribute('src', array[randomSelect])
    randomSelect<4 ? randomSelect++ : randomSelect = 0
    $container.appendChild($img);
    console.log($img)
}, 1500);

$container.addEventListener('click', function(e){
    $container.removeChild(e.target);
});