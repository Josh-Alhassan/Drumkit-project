function playSound(e) {
	const audio = document.querySelector(`audio[data-key = "${e.keycode}"]`);
	const key = document.querySelector(`key[data-key = "${e.keycode}"`);

	if (!audio) return; // Stop the function from running
	audio.currentTime = 0; // Rewind Audio to start
	audio.play();
	key.classlist.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') {
		return // Skip if it is not a transfrom
	}
	this.classlist.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));

window.addEventListener('keydown', playSound);