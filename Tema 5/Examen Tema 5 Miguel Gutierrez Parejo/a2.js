window.onload=function(){document.onmousedown=mover}

document.addEventListener('mousedown', () => {
    document.getElementById("imagen").src = "https://i.pinimg.com/236x/a6/eb/d7/a6ebd77923c9c2d9db526a38d0cd29f5.jpg";
});
document.addEventListener('mouseup', () => {
    document.getElementById("imagen").src = "https://w7.pngwing.com/pngs/520/424/png-transparent-white-car-car-white-cars.png";
})

    function mover() {
        var img=document.getElementById('img');
        document.onmousemove=function (e) {
            img.style.left=e.pageX-80 + 'px';
            img.style.top=e.pageY-80 + 'px';
        }
    }