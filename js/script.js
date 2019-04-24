const E_STATE = {
  EXPAND: 1,
  FLYOUT: 2
}

const E_PRODUCT = {
  PRISM_CENTRAL: "Prism Central",
  XI_LEAP: "Xi Leap",
  XI_FRAME: "Xi Frame",
  XI_BEAM: "Xi Beam",
  XI_EPOCH: "Xi Epoch",
  XI_IOT: "Xi IoT",
  XTRACT: "Xtract"
}

let state = E_STATE.EXPAND;
let product = E_PRODUCT.PRISM_CENTRAL;

$(function () {
  setProduct(product);

  $('.switcher').click(function () {
    $('.products').toggleClass('prod-expanded')
  })

  $('.hamburger').click(function () {
    $('article').toggleClass('expanded');
    $('aside').toggleClass('nav-expanded');
    $(this).toggleClass('cross');
  })

  $('.expand').click(function () {
    state = E_STATE.EXPAND;
    setProduct(product);
  });

  $('.flyout').click(function () {
    state = E_STATE.FLYOUT;
    setProduct(product);
  });

  $.each(E_PRODUCT, function (index, name) {
    $('#products').append('<a hcd id='+name+'>' + name + '<span></span></a>');
  });

  $('#products a').click(function (elem) {
    setProduct($(elem.target).text().replace('5',''));
  });

});

function setProduct(e_product) {
  $('#page-title, .product-title').text(e_product)

  //
  e_product !== 'Prism Central' ? $('.instanceSwitch').text('Show').hide() : $('.instanceSwitch').show()
  e_product !== 'Prism Central' ? $('.product-grid').hide() : null
  e_product !== 'Prism Central' ? $('.instance-number').hide() : $('.instance-number').show()
  //


  $('#products').removeClass('prod-expanded')
  $('#prod-logo').attr('src',`./logos/${e_product.toLowerCase().replace(' ', "_")}.svg`)
  $('#navigation').html('');
  let filename = "./sitemap/" + e_product.toLowerCase().replace(' ', "-") + ".json";

  $.getJSON(filename, function (data) {
    renderNavigation(data);
  })
    .fail(function (jqxhr, textStatus, error) {
      alert("Request Failed: " + filename + ", " + error);
    });
}

function renderNavigation(tree) {
  if (state === E_STATE.EXPAND) {
    $('.expand').addClass('active');
    $('.flyout').removeClass('active');
    pane = $('#navigation').append('<div class="scroll"></div>')
    treeExpand(pane.find(".scroll"), tree);
  } else {
    $('.flyout').addClass('active');
    $('.expand').removeClass('active');
    treeFlyout($('#navigation'), tree);
  }
}

function treeExpand(parent, tree) {
  tree.map(element => {
    if (element.type === "SEPARATOR") {
      parent.append('<hr></hr>');
    }
    if (element.type === "PAGE") {
      parent.append('<div class="nav-item" hcd><a>' + element.title + '</a></div>');
    }
    if (element.type === "PARENT") {
      details = $('<details><summary hcd >' + element.title + '<kbd><img src="./images/arrow.svg" /></kbd></summary>').appendTo(parent);
      subnav = $('<div class="sum-secondary-menu"></div>').appendTo(details);
      treeExpand(subnav, element.nav)
      parent.append('</details>');
    }
  });
}

function treeFlyout(parent, tree) {
  tree.map(element => {
    if (element.type === "SEPARATOR") {
      parent.append('<hr></hr>');
    }
    if (element.type === "PAGE") {
      parent.append('<div class="nav-item" hcd><a>' + element.title + '</a></div>');
    }
    if (element.type === "PARENT") {
      details = $('<div class="nav-item" hcd><a>' + element.title + '</a><img src="./images/arrow.svg" />').appendTo(parent);
      subnav = $('<div class="nav-secondary-menu"></div>').appendTo(details);
      treeFlyout(subnav, element.nav)
      parent.append('</details>');
    }
  });
}
