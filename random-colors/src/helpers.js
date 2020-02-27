function choice(arr) {
	var rando = Math.floor(Math.random() * arr.length);
	return arr[rando];
}
export { choice };
