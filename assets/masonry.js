// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
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

console.log('hello')
