// calculate background's opacity
$(document).on("scroll", function () {
  let scrollTop = $(document).scrollTop();

  let scrollBottom = scrollTop + $(window).height();

  let pageBottom = $(document).height();

  let difference = pageBottom - scrollBottom;
  let opacity = 1 - difference / 300;

  $("div.fade-bg").css("opacity", opacity);
});
