function myFunction(){
var search=document.getElementById("search").value;
 var xhr= new XMLHttpRequest();
 xhr.open("GET","https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key=PBVgqcDlMzFfJMaoXrTgPA4zCquaSGbA");
 xhr.send();
 var data;
 xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      data=JSON.parse(this.responseText);
               console.log(data);
     }
    }
}
 