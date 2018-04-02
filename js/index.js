{
	let tips=document.querySelectorAll(".tips");
	let content=document.querySelectorAll(".row");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=content[index].offsetTop-40;
			// console.log(ot);
			// document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25);
		}
	})

	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		
		for(let i=0;i<content.length;i++){
			if(st>content[i].offsetTop-50){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
					
				}
				tips[i].classList.add("active");
			}
		}
	})
}