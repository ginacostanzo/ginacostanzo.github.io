window.onscroll = function() {
    let jumpBtn = document.querySelector('#jump-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      jumpBtn.style.display = "block";
    } else {
      jumpBtn.style.display = "none";
    }
  }