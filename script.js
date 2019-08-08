window.addEventListener('load',function () {

    var menu_icon=document.querySelector('.mobile_menu');
    var mobile_menu=document.querySelector('.menu');
    var current=0;

    menu_icon.addEventListener("click",function () {
        current++;
        if (current%2==1){
            mobile_menu.style.display="block";
        }else{
            mobile_menu.style.display="none";
        }
    })
})