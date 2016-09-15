/*
SEAN MADE THIS.
https://plus.google.com/u/0/+SeanYentheHumansperson

This is where the main magic happens. That's about it.
/value/ig
i.includes(value)
*/
document.querySelector("#eng").addEventListener("focus", function(){
  document.querySelector("#eyo").setAttribute("disabled","true");
});
document.querySelector("#eng").addEventListener("blur", function(){
  if (document.querySelector("#eng").value=="") {
   document.querySelector("#eyo").removeAttribute("disabled");
  }
});
document.querySelector("#eyo").addEventListener("focus", function(){
  document.querySelector("#eng").setAttribute("disabled","true");
});
document.querySelector("#eyo").addEventListener("blur", function(){
  if (document.querySelector("#eyo").value=="") {
    document.querySelector("#eng").removeAttribute("disabled");
  }
});
document.querySelector("#eng").onchange=document.querySelector("#eng").onkeyup = function() {
  search(document.querySelector("#eng").value.toLowerCase(),0);
};
document.querySelector("#eyo").onchange=document.querySelector("#eyo").onkeyup = function() {
  search(document.querySelector("#eyo").value.toLowerCase(),1);
};
function search(query,id) {
  document.querySelector("ul").innerHTML="";
  if (id==0) {
    document.querySelector("#eng").value=document.querySelector("#eng").value.replace(/\W/g, "");
  } else {
    document.querySelector("#eyo").value=document.querySelector("#eyo").value.replace(/\W/g, "");
  }
  if (query=="") {
    document.querySelector("ul").innerHTML+="<li id='noQuery'><div>Search up words in the input boxes at the top!</div></li>";
    document.querySelector(id?"#eyo":"#eng").value="";
  } else {
    var bests="",gettings="",elses="";
    for (var i=0;i<dict.length;i++){
      var src=dict[i][id];
      if (new RegExp(query,"i").test(src)) {
        var s="<div class='en'>"+dict[i][0]+"</div><div class='ey'>"+dict[i][1]+(dict[i][2]?" *":"")+"</div>";
        if (new RegExp(" "+query+" ","i").test(src)||src.indexOf(query+" ")==0||src.indexOf(" "+query)==src.length-(" "+query).length) {
          bests+="<li class='bestMatch'>"+s+"</li>";
        } else if (src.indexOf(query)==0||new RegExp(" "+query,"i").test(src)) {
          gettings+="<li class='gettingThere'>"+s+"</li>";
        } else {
          elses+="<li>"+s+"</li>";
        }
      }
    }
    document.querySelector("ul").innerHTML=bests+gettings+elses;
  }
}
