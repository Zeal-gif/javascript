for (let star = 0; star < 8; star++){
	let row = " ";
	for (let space = 0; space < 8; space ++){
	    if ((star + space) % 2 === 0) {
	        row += " ";
	   } else {
	        row +="#";
	    }
	}
	console.log(row);
}


}
