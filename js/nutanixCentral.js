

$('.products').prepend(
  `
  <div class='instance-details' vs>
    <div class='info' hcs fw>
      <div fw>
        <h3 class='product-title'> Instance 123123</h3>
        <p> Project Development     <kbd class='instance-number'> &nbsp;·&nbsp; Change</kbd> </p>
      </div>
      <div class='buttons' hc>
        <!-- <input  style ='margin:0' type='text'/> -->

        <button class='secondary search-button'> <img src="./images/search.svg"/> </button>
      </div>
    </div>
  </div>
  `
);






setTimeout(function () {
  // $('.products').toggleClass('prod-expanded');


  $('.product-grid').find('a').click(function(){
    $('.products').toggleClass('prod-expanded');
  })
  $('#Prism').append('<span vc class="multi-instance">5</span>')

  $('#Prism').click(function(){ alert('Here you would have choosen your instance')})
}, 120);
