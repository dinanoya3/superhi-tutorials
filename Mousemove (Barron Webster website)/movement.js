// select the document (whole page)
// event is the variable for when something changes every time mouse is moved
$(document).on("mousemove", function (event) {

    // select the class .first and change the css
    // depends on the cursor position
    $("img.first").css("width", event.pageX)
    $("img.first").css("height", event.pageY)

    // for class .second the difference between the element and the whole page
    // depends on the width of page minus the cursor position
    $("img.second").css("width", $(window).width() - event.pageX)
    // keeps the same height as .first
    $("img.second").css("height", event.pageY)

    // width is the same as .first
    $("img.third").css("width", event.pageX)
    // take away the height of the page 
    $("img.third").css("height", $(window).height() - event.pageY)

    // take away window height and width
    $("img.fourth").css("width", $(window).width() - event.pageX)
    $("img.fourth").css("height", $(window).height() - event.pageY)
})