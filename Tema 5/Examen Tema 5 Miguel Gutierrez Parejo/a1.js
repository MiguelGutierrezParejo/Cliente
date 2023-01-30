window.onload=function(){document.onmousedown=mover}

    function mover() {
        var img=document.getElementById('img');
        document.onmousemove=function (e) {
            img.style.left=e.pageX-80 + 'px';
            img.style.top=e.pageY-80 + 'px';
        }
    }