let size = 8;
let board = "";

for (let star = 0; star < size; star++){
	for (let space = 0; space < size; space ++){
	    if ((star + space) % 2 === 0) {
	        board += " ";
	   } else {
	        row +="#";
	    }
	}
	board += "\n"
	console.log(board);
}


}
