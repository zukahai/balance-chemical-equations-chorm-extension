$(document).ready(function() {
    $("img").attr("src", CONFIG.imgPath);
    $(window).on('scroll', function() {
      // Xử lý sự kiện cuộn ở đây
      $("img").attr("src", CONFIG.imgPath);
    });
});