function setResult(title, percent) {
  $(".unit-name").text(title);
  $("#percent-label").text(percent);
  $(".bar").width( percent + '%' );
}
