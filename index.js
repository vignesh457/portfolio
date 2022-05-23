document.querySelector(".mode").addEventListener("click",function(){
  var curr = document.querySelector(".style-link").getAttribute("href");
  if(curr=="css/style.css")
  {
    document.querySelector(".mode").setAttribute("src","https://cdn-icons-png.flaticon.com/128/1177/1177480.png");
    document.querySelector(".style-link").setAttribute("href","css/style2.css");
  }
  else
  {
    document.querySelector(".mode").setAttribute("src","https://t4.ftcdn.net/jpg/02/40/37/31/240_F_240373136_O2ZOgz62EtgA1w6KVlsktHpIzeYFqv24.jpg");
    document.querySelector(".style-link").setAttribute("href","css/style.css");
  }

});
