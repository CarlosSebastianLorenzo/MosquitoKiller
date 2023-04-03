let $container = document.getElementById('container');
let array = ["./assets/img/mosquito (1).png","./assets/img/mosquito (2).png","./assets/img/mosquito (3).png","./assets/img/mosquito (4).png","./assets/img/mosquito (5).png"];
let randomSelect = 0;
let $kills = document.querySelector('header h3')
let kills = 0;
setInterval(() => {
    let $img = document.createElement('img')
    $img.setAttribute('src', array[randomSelect])
    $img.style.top = `${Math.floor(Math.random() * 100)}%`;
    $img.style.left = `${Math.floor(Math.random() * 100)}%`;
    if(randomSelect%2 == 0) {
        $img.setAttribute('alt', "mosquito")
    } else {
        console.log(randomSelect%2)
        $img.setAttribute('alt', "fly")
    }
    randomSelect<4 ? randomSelect++ : randomSelect = 0
    $container.appendChild($img);
}, 1372);
$container.addEventListener('click', function(e){

    if(e.target!=$container){
        e.target.style.animation = 'none';
        e.target.classList.add('smash');
        kills++;
        $kills.innerHTML = `kills ${kills}`
    }
    setTimeout(function(){
        $container.removeChild(e.target);
    },500)
});
$container.addEventListener('touchstart', function(e){
    e.preventDefault();
    if(e.target!=$container){
        e.target.style.animation = 'none';
        e.target.classList.add('smash');
        kills++;
        $kills.innerHTML = `kills ${kills}`
    }
    setTimeout(function(){
        $container.removeChild(e.target);
    },1000)
});

let $music = document.getElementById('ambientMusic');
$music.muted = true;
let $muted = document.querySelectorAll('#sound, #muted');
$muted.forEach(function(e){
    e.addEventListener('click', function(){
        $music.play();
        $muted.forEach(e => e.classList.toggle('hide'));
        $music.muted==true? $music.muted=false : $music.muted=true;
    })
})
// Math.floor(Math.random() * 100) + 1