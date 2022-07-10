document.addEventListener('DOMContentLoaded', function () {
  // console.log(document.querySelectorAll('.how-we-work__step'))
  document.querySelectorAll('.how-we-work__step').forEach(function (tabsBtn) {
    // console.log(tabsBtn)
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.step').forEach(function (tabContent) {
        tabContent.classList.remove('step-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('step-active')
    })
  })

  var accordion = document.getElementById('accordion');
  accordion.addEventListener('click', change);
  function change(event) {
    var targ = event.target;
    if (targ.tagName !== 'H3') return;
    if (targ.classList.contains('select')) {
      hideAll();
    } else {
      hideAll();
      targ.classList.add('select');
      showText(targ.nextElementSibling);
    }
  }
  function hideAll() {
    var h3El = accordion.querySelectorAll('h3');
    var divEl = accordion.querySelectorAll('div');
    for (var i = 0; i < h3El.length; i++) {
      h3El[i].classList.remove('select');
    }
    for (var i = 0; i < divEl.length; i++) {
      divEl[i].style.height = '0';
    }
  }
  function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
  }
})

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav__burger").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Tabs btn

document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $('#tabs-btn-1').click(function () {
      $('#tabs-btn-1').addClass('tabs-btn-active');
      $('#tabs-btn-2').removeClass('tabs-btn-active');
      $('#tabs-btn-3').removeClass('tabs-btn-active');
      $('#tabs-btn-4').removeClass('tabs-btn-active');
    });
    $('#tabs-btn-2').click(function () {
      $('#tabs-btn-2').addClass('tabs-btn-active');
      $('#tabs-btn-1').removeClass('tabs-btn-active');
      $('#tabs-btn-3').removeClass('tabs-btn-active');
      $('#tabs-btn-4').removeClass('tabs-btn-active');
    });
    $('#tabs-btn-3').click(function () {
      $('#tabs-btn-3').addClass('tabs-btn-active');
      $('#tabs-btn-1').removeClass('tabs-btn-active');
      $('#tabs-btn-2').removeClass('tabs-btn-active');
      $('#tabs-btn-4').removeClass('tabs-btn-active');
    });
    $('#tabs-btn-4').click(function () {
      $('#tabs-btn-4').addClass('tabs-btn-active');
      $('#tabs-btn-1').removeClass('tabs-btn-active');
      $('#tabs-btn-2').removeClass('tabs-btn-active');
      $('#tabs-btn-3').removeClass('tabs-btn-active');
    });
  });
})