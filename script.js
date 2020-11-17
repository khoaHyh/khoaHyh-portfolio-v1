// Clicking Smart-brain project tile
document.getElementById('project-tile_smart-brain').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex'; 
    document.querySelector('.modal-content_smart-brain').style.display = 'flex';
});

// Clicking EOHE project tile
document.getElementById('project-tile_EOHE').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.modal-content_eohe').style.display = 'flex';
});

// Closing Smart-Brain modal
document.querySelector('#close_smart-brain').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('.modal-content_smart-brain').style.display = 'none';
});

// Closing EOHE modal
document.querySelector('#close_eohe').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
    document.querySelector('.modal-content_eohe').style.display = 'none';
});