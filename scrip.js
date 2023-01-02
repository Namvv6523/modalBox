var modal = document.getElementById('myModal'); /* lấy modal để mở */
var button = document.getElementById('myBtn'); /* lấy btn để mở modal */
var close = document.getElementsByClassName('close')[0]; /* lấy close để đóng modal */

button.onclick = function (){
    modal.style.display = 'block';
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}