// variables
let openBtn  = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn')

//event

openBtn.addEventListener('click', function() {
	modalContainer.style.display = 'block';
});

