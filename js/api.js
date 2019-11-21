

 var xhr= new XMLHttpRequest();
  xhr.open("GET","https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=PBVgqcDlMzFfJMaoXrTgPA4zCquaSGbA");
  xhr.send();
  var data;
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       data=JSON.parse(this.responseText);
       console.log(data);
        
       document.getElementById("news0").innerHTML=data.results[0].title;
       document.getElementById("news1").innerHTML=data.results[0].abstract;
       document.getElementById("news2").innerHTML=data.results[0].published_date;
       document.getElementById("news3").innerHTML=data.results[0].byline;

       document.getElementById("news01").innerHTML=data.results[1].title;
       document.getElementById("news11").innerHTML=data.results[1].abstract;
       document.getElementById("news21").innerHTML=data.results[1].published_date;
       document.getElementById("news31").innerHTML=data.results[1].byline;

       document.getElementById("news02").innerHTML=data.results[2].title;
       document.getElementById("news12").innerHTML=data.results[2].abstract;
       document.getElementById("news22").innerHTML=data.results[2].published_date;
       document.getElementById("news32").innerHTML=data.results[2].byline;

       document.getElementById("news03").innerHTML=data.results[3].title;
       document.getElementById("news13").innerHTML=data.results[3].abstract;
       document.getElementById("news23").innerHTML=data.results[3].published_date;
       document.getElementById("news33").innerHTML=data.results[3].byline;
  
       document.getElementById("news04").innerHTML=data.results[4].title;
       document.getElementById("news14").innerHTML=data.results[4].abstract;
       document.getElementById("news24").innerHTML=data.results[4].published_date;
       document.getElementById("news34").innerHTML=data.results[4].byline;
      
       document.getElementById("news05").innerHTML=data.results[5].title;
       document.getElementById("news15").innerHTML=data.results[5].abstract;
       document.getElementById("news25").innerHTML=data.results[5].published_date;
       document.getElementById("news35").innerHTML=data.results[5].byline;

       document.getElementById("news06").innerHTML=data.results[6].title;
       document.getElementById("news16").innerHTML=data.results[6].abstract;
       document.getElementById("news26").innerHTML=data.results[6].published_date;
       document.getElementById("news36").innerHTML=data.results[6].byline;

       document.getElementById("news07").innerHTML=data.results[7].title;

       document.getElementById("news08").innerHTML=data.results[8].title;

       document.getElementById("news09").innerHTML=data.results[9].title;

       document.getElementById("news010").innerHTML=data.results[10].title;
      }
    };
