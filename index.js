let a = document.getElementById('charts');
a.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.className=='element-box' || e.target.className=='chart-icon'|| e.target.className=='chart-icon-play' ){
        location.href = "./playlist.html";
    }
})