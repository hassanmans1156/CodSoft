let HtmlPer = document.querySelector(".HTMLLevel");
	let CssPer = document.querySelector(".CSSLevel");
	let PhpPer = document.querySelector(".PHPLevel");
	let JsPer = document.querySelector(".JSLevel");
	let JqueryPer = document.querySelector(".JQUERYLevel");
	let JavaPer = document.querySelector(".JAVALevel");
	let CPer = document.querySelector(".CLevel");
	let BootstrapPer = document.querySelector(".BOOTSTRAPLevel");
	
	let htmlground = document.querySelector(".HTMLBack");
	let cssground = document.querySelector(".CSSBack");
	let jsground = document.querySelector(".JAVASCRIPTBack");
	let phpground = document.querySelector(".PHPBack");
	let jqueryground = document.querySelector(".JQUERYBack");
	let javaground = document.querySelector(".JAVABack");
	let cground = document.querySelector(".CBack");
	let bootstrapground = document.querySelector(".BOOTSTRAPBack");
	
	window.onload = function(){

		// Skills' Percentages
		var HTMLpercent = setInterval(function(){
			HtmlPer.textContent++
			if(HtmlPer.textContent == HtmlPer.dataset.percent){
				clearInterval(HTMLpercent);
			}
		},100)

		var CSSpercent = setInterval(function(){
			CssPer.textContent++
			if(CssPer.textContent == CssPer.dataset.percent){
				clearInterval(CSSpercent);
			}
		},100)

		var JSpercent = setInterval(function(){
			JsPer.textContent++
			if(JsPer.textContent == JsPer.dataset.percent){
				clearInterval(JSpercent);
			}
		},100)

		var PHPpercent = setInterval(function(){
			PhpPer.textContent++
			if(PhpPer.textContent == PhpPer.dataset.percent){
				clearInterval(PHPpercent);
			}
		},100)

		var JQUERYpercent = setInterval(function(){
			JqueryPer.textContent++
			if(JqueryPer.textContent == JqueryPer.dataset.percent){
				clearInterval(JQUERYpercent);
			}
		},100)

		var JAVApercent = setInterval(function(){
			JavaPer.textContent++
			if(JavaPer.textContent == JavaPer.dataset.percent){
				clearInterval(JAVApercent);
			}
		},100)

		var Cpercent = setInterval(function(){
			CPer.textContent++
			if(CPer.textContent == CPer.dataset.percent){
				clearInterval(Cpercent);
			}
		},100)

		var BOOTSTRAPpercent = setInterval(function(){
			BootstrapPer.textContent++
			if(BootstrapPer.textContent == BootstrapPer.dataset.percent){
				clearInterval(BOOTSTRAPpercent);
			}
		},100)

		// Background's Heights
		
		var HTMLBackHeight = setInterval(function(){
			htmlground.style.height = htmlground.dataset.height;
		},100)
		var CSSBackHeight = setInterval(function(){
			cssground.style.height = cssground.dataset.height;
		},100)
		var JAVASCRIPTBackHeight = setInterval(function(){
			jsground.style.height = jsground.dataset.height;
		},100)
		var PHPBackHeight = setInterval(function(){
			phpground.style.height = phpground.dataset.height;
		},100)
		var JQUERYBackHeight = setInterval(function(){
			jqueryground.style.height = jqueryground.dataset.height;
		},100)
		var JAVABackHeight = setInterval(function(){
			javaground.style.height = javaground.dataset.height;
		},100)
		var CBackHeight = setInterval(function(){
			cground.style.height = cground.dataset.height;
		},100)
		var BOOTSTRAPBackHeight = setInterval(function(){
			bootstrapground.style.height = bootstrapground.dataset.height;
		},100)
		
	}