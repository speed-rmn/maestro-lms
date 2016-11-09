(function linkHeaderImage($) {
  // remove any UI generated for this widget by the LMS; parent <script> tag expected to have id of "link-header-image-script"
  $("#link-header-image-script").parents(".widget").hide();

  var homeLinkCSS = {
    "font-size": "larger",
    "line-height": 0.9
  };

  // attempt to get current home URL from "Home" link on page
  var $home = $(".learnerhome").find("a").css(homeLinkCSS);
  var homeURL = $home.attr("href");

  // default if URL unavailable for whatever reason
  homeURL = homeURL || "https://gm1.geolearning.com/geonext/retailmenot/displaywidgetpage.geo?id=nQAMXpGBScF8onfKFvzZsWrG92z3eAz1cl3LqNrRDfniuyQEURkFNg..&nav=RMNHomePage";

  // make header image link back to home; hilariously, the header image is already in an <a> tag, it just has no 'href'.  What a system.
  $(".brandimage").find("a").attr("href", homeURL);
})(jQuery);
