function changeColor() {
	document.getElementById("education").style.color = '#F2E3D5';
    document.getElementById("education").style.backgroundColor = '#012E40';
}


function colorChange() {
    document.querySelector("p.school").style.color = '#FFEEE6';
    document.querySelector("p.school").style.backgroundColor = '#2A8277';
}

function addPicture() {
	const image = document.createElement("img");
	image.setAttribute("id", "img");
	image.setAttribute(
		'src',
		'paris.jpg',
	  );
	  image.setAttribute("width", 50 + "%");
	  image.setAttribute("height", 50 + "%");
	  image.id = 'copy';
	  const box = document.getElementById('box');
      box.appendChild(image);
}

let scaleValue = 1;
function increaseThePicture() {
	let img = document.getElementById("img");
	scaleValue +=0.1 ;
	img.style.transform = `scale(${scaleValue})`;
}

function decreaseThePicture() {
	let img = document.getElementById("img");
	scaleValue -=0.1 ;	
	img.style.transform = `scale(${scaleValue})`;
}


function deleteThePicture() {
	const image = document.getElementById("copy")
	image.remove();
}

