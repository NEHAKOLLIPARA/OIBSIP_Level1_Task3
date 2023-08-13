var celsiusi=document.querySelector("#celsius > input");
var Fahrenhiti=document.querySelector("#Fahrenhit>input");
var btn=document.querySelector("button");
celsius.addEventListener("input",function(){
var c=parseFloat(celsiusi.value);
var F=(c*(9/5)+32);
Fahrenhiti.value=Math.round(F);  
});
Fahrenhiti.addEventListener("input",function(){
   var F=parseFloat(Fahrenhiti.value);
   var C=(F-32)*(5/9);
   celsiusi.value=Math.round(C);
   });
      btn.addEventListener("click",function(){
         celsiusi.value=" ";
         Fahrenhiti.value=" "; 
        
      });
