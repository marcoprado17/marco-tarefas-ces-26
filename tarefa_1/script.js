document.getElementById("add-red").onclick = function(){
	var box = document.createElement("div");
	box.setAttribute("style", "width: 100px; height: 100px; background-color: red;");
	box.setAttribute("id", "initial-red-box");
	document.body.appendChild(box);
}

document.getElementById("add-blue").onclick = function(){
	var box = document.createElement("div");
	box.setAttribute("style", "width: 100px; height: 100px; background-color: blue;")
	box.setAttribute("id", "initial-blue-box");
	document.body.appendChild(box);
}

document.getElementById("to-green").onclick = function(){
	var box = document.getElementById("initial-red-box");
	box.setAttribute("style", "width: 100px; height: 100px; background-color: green;");
}

document.getElementById("remove-blue").onclick = function(){
	var box = document.getElementById("initial-blue-box").remove();;
	document.re
}