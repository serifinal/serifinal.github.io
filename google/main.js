const searchInput = document.querySelector("#search-input");

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + (input) + "&rlz=1C1JZAP_viVN962VN962&oq=" + (input) + "&aqs=chrome..69i57j46i433i512j0i433i512j46i433i512j46i131i433i512j46i433i512j46i131i433i512j0i512j0i433i512l2.1806j0j9&sourceid=chrome&ie=UTF-8";
}


searchInput.addEventListener("keydown", function(event) {
    if(event.keyCode === 13){
        event.preventDefault();
        search();
    }
});


const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click',function(){
    search();
})




