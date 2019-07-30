window.onload = function() {

  // Show list screen on click

  document.getElementsByClassName('down-header')[0].addEventListener('click', function() {
    var list = document.getElementById('list');

    list.style.height = ( parseInt( document.getElementsByClassName('audio-container')[0].offsetHeight ) - 135 ) + 'px';

    document.getElementById('list-screen').classList.remove('slide-out-top');
    document.getElementById('list-screen').classList.add('slide-in-top');
    document.getElementById('list-screen').style.display = "block";
  });

  // -- Show list screen on click --

  // Hide list screen on click

  document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function() {
    document.getElementById('list-screen').classList.remove("slide-in-top");
    document.getElementById('list-screen').classList.add("slide-out-top");
    document.getElementById('list-screen').style.display = "none";
  });

}
