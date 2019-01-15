document.addEventListener('DOMContentLoaded', function(){
  	'use strict'

	const phoneElem = document.querySelector('.phone'),
		bg = document.querySelector('.wrapper'),
		phoneViewport = document.querySelector('.phone__viewport');


	function setSize() {
		let x = bg.clientWidth + 'px',
		    y = bg.clientHeight + 'px';
		    console.log(x, y);
		phoneViewport.style.backgroundSize = x + ' ' + y;
	}

	function setPosition(){
		phoneElem.style.left = event.clientX + 'px';
		phoneElem.style.top = event.clientY + 'px';
		phoneViewport.style.backgroundPositionX = '-' + event.clientX + 'px';
		phoneViewport.style.backgroundPositionY = '-' + event.clientY + 'px';
	}

	window.addEventListener('resize', setSize);

	setSize();

	document.addEventListener('mousemove', setPosition, true);
	
});