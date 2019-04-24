

$('.products').prepend(
  `
  <div class='instance-details' vs>
    <div class='info' hcs fw>
      <div fw>
        <h3 class='product-title'> Service Name</h3>
        <p> Instance Name · Addional Data </p>
      </div>
      <div class='buttons' hc>
        <button class='secondary'> Switch Instance</button>
        <button class='secondary'> <img src="./images/search.svg"/> </button>
      </div>
    </div>
  </div>
  `
);





setTimeout(function () {
  $('.products').toggleClass('prod-expanded');

  $('.instance-details').append(

    `
    <div class='product-grid'>
    <a hcs> Instance 1</a>
     <a hcs> Instance 2</a>
     <a hcs> Instance 1</a>
     <a hcs> Instance 2</a>
     <a hcs> Instance 1</a>
     <a hcs> Instance 2</a>
   </div>
    `
  )
}, 200);
