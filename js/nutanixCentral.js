

$('.products').prepend(
  `
  <div class='instance-details' vs>
    <div class='info' hcs fw>
      <div fw>
        <h3 class='product-title'> Service Name</h3>
        <p> Development     <kbd class='instance-number'> &nbsp;·&nbsp; Product ABC</kbd> </p>
      </div>
      <div class='buttons' hc>
        <!-- <input  style ='margin:0' type='text'/> -->
        <button class='secondary instanceSwitch' onClick='switchInstance()'> Show</button>
        <button class='secondary search-button'> <img src="./images/search.svg"/> </button>
      </div>
    </div>
  </div>
  `
);



function switchInstance(){
  let button = $('.instanceSwitch')
  button.text() === 'Show' ? button.text('Hide') : button.text('Show')
  $('.product-grid').slideToggle(200, 'swing');
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

  $('#Prism').click(function(){ alert('Here you would have choosen your instance')})
}, 120);
