
function toggleMobileButton(){
	document.getElementById('mobile-icon').classList.toggle('hamburger-opened');
	document.getElementById('mobile-menu').classList.toggle('mobile-menu-opened');
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
	var currentScrollPos = window.pageYOffset;

	if(prevScrollpos > currentScrollPos){
		document.getElementById("navbar").style.top = "0";
	}else if(currentScrollPos === 0){
		document.getElementById("navbar").style.top = "0px";
	}else{
		document.getElementById("navbar").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}

