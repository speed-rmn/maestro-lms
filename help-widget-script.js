$(function () {
  $dt = $(".faq dt").on("click", function () {
  	// Close other expanded questions
    $dt.filter(".expanded").not(this).removeClass("expanded");

    // Toggle whether this question is expanded or not
    $(this).toggleClass("expanded");
  });
});