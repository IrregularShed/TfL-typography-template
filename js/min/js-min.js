document.getElementById("formEntry").addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("hex"),n=t.value;$("body").css("background",n),console.log(n)});