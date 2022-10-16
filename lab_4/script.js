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
	  const box = document.getElementById('box');
      box.appendChild(image);
}

function increaseThePicture() {
	let img = document.getElementById("img");
	img.setAttribute("width", 60 + "%");
	img.setAttribute("height", 60 + "%");
}

function decreaseThePicture() {
	let img = document.getElementById("img");
	img.setAttribute("width", 40 + "%");
	img.setAttribute("height", 40 + "%");
}

function deleteThePicture() {
	const image = document.getElementById("img")
	image.remove();
}