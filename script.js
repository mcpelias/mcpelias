 
    // Get the toggle-nav button
var toggleNavButton = document.querySelector('.toggle-nav');

// Get the menu element
var menu = document.querySelector('.menu');

// Add a click event listener to the toggle-nav button
toggleNavButton.addEventListener('click', function() {
	// Toggle the "active" class on the menu element
	menu.classList.toggle('active');
});



function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
  
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }
