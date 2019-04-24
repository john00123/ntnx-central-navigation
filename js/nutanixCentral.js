

$('.products').prepend(
  `
  <div class='instance-details' vs>
    <div class='info' hcs fw>
      <div fw>
        <h3 class='product-title'> Service Name</h3>
        <p> Instance Name · Addional Data </p>
      </div>
      <div class='buttons' hc>
        <button class='secondary instanceSwitch' onClick='switchInstance()'> Show Instances</button>
        <button class='secondary'> <img src="./images/search.svg"/> </button>
      </div>
    </div>
  </div>
  `
);



function switchInstance(){
  let button = $('.instanceSwitch')
  $('.product-grid').slideToggle();
  button.text() === 'Show Instances' ? button.text('Hide Instances') : button.text('Show Instances');
}



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

  $('.product-grid').find('a').click(function(){
    $('.products').toggleClass('prod-expanded');
  })
}, 200);
