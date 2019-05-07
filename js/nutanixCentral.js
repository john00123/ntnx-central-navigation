

$('.products').prepend(
  `
  <div class='instance-details' vs>

      <div class='buttons' hc>
        <input></input>
        <button class='secondary search-button'> <img src="./images/search.svg">
        </button>
      </div>
    </div>
  </div>
  `
);





function switchInstance(){
  let button = $('.instanceSwitch')
  $('.product-grid').slideToggle(300, 'swing');
  button.text() === 'Show' ? button.text('Hide') : button.text('Show');
}



setTimeout(function () {
  // $('.products').toggleClass('prod-expanded');

  $('.instance-details').append(

    `
    <div class='product-grid'>
      <a hcd > Product ABC <span> </span></a>
      <a hcd> Product 123 <span> </span></a>
      <a hcd> Product Alpha <span> </span></a>
      <a hcd> Product Beta <span> </span></a>
      <a hcd> Product Charlie <span> </span></a>
   </div>
    `
  )

  $('.product-grid').find('a').click(function(){
    $('.products').toggleClass('prod-expanded');
  })
  switchInstance()
  $('#Prism').append('<span vc class="multi-instance">5</span>')

  $('#Prism').click(function(){
     alert('Here you would have choosen your instance')
  })
}, 200);


$('#page-title').append('<span alt>Product ABC</span>');
console.log('done')
