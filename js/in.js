var imglist=document.querySelectorAll(".img-item");
var containerlightbox=document.querySelector(".lightbox-contaniner");
var imglight=document.querySelector(".light-img");
var imgs=[];
var index=0;
for(var	i=0; i<imglist.length; i++)
	{
		imgs.push(imglist[i]);
		imglist[i].addEventListener("click",function(e){	
		containerlightbox.style.display="block";
		var srcimg=e.target.src;
		index=imgs.indexOf(e.target);	
		imglight.style.backgroundImage="url("+srcimg+")";								})
	}
var close=document.getElementById("close");
close.addEventListener("click",function(e){
	containerlightbox.style.display="none";
})
document.addEventListener("keydown",function(e){
	if(e.keyCode==27)
	{
		containerlightbox.style.display="none";	
	}

})
document.addEventListener("keydown",function(e){
	if(e.keyCode==27)
	{
		containerlightbox.style.display="none";	
	}

})
var next=document.getElementById("next");
next.addEventListener("click",function(e){
index++;
if(index==imgs.length)
   {
   index=0;
   }
var current=imgs[index].src;	
imglight.style.backgroundImage="url("+current+")";		
})
var left=document.getElementById("left");
left.addEventListener("click",function(e){
index--;
if(index<0)
   {
   index=imgs.length-1;
   }
var prev=imgs[index].src;	
imglight.style.backgroundImage="url("+prev+")";		
})


 