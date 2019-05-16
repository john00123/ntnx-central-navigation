

$('.products').prepend(
  `
  <div class='instance-details' vs>
    <div class='info' hcs fw>
      <div class='left-title' hs fw>
        <p hs class='product-title isSwitch'> Instance 123123 </p>
        <p class='values'>Project Development </p>
      </div>
      <div class='buttons' hc>
        <!-- <input  style ='margin:0' type='text'/> -->
        <input id='filter-input' type='text'/>
        <button class='secondary search-button'> <img src="./images/search.svg"/> </button>
        <button class='secondary search-button'> <img src="./images/filter.svg"/> </button>
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

  $('.left-title').click()
  $('#Prism').click(popUp)
}, 120);

let search = $('.search-button');

search.click(function(){
  $('#filter-input').fadeToggle()
})

$('.isSwitch').hover(function() {
  $('.values').text('Change Instance')
  },
  function() {
    $('.values').text('Project Development')
  }
)


$('.isSwitch').click(popUp)





function popUp() {

  $('body').append(`<div vc class='overlay'>

    <div vc class='popup-container'>
      <div hcd class='popup-header'><div></div><h3> Choose Instance </h3>
      <img class='close' src="./images/cross.svg"/></div>
      <div class='popup-body'>
        <div hcd class='instance'>
          <div> <p>Instance 1111 </p><p alt> Development </p>
          </div>
          <button class='primary'> Select</button>
        </div>

        <div hcd class='instance'>
          <div> <p>Instance 1111 </p><p alt> Development </p>
          </div>
          <button class='primary'> Select</button>
        </div>
        <div hcd class='instance'>
          <div> <p>Instance 1111 </p><p alt> Development </p>
          </div>
          <button class='primary'> Select</button>
        </div>
      </div>


    </div>

  </>`)

  $('.primary, .close').click(function() {
    $('.overlay').remove()
  })
}
