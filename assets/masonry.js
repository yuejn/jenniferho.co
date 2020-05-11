// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry

window.onload = function(){
  const grid = document.querySelector('.grid');

  const msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });
}

// // init Masonry
// var $grid = $('.grid').masonry({
//   // options...
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress(function () {
//   $grid.masonry('layout');
// });

