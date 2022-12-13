$(document).ready(function($) {
  $('.fromAreasTabsContainer').hide();
  $('.fromAreasTabsContainer:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function(event) {
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.fromAreasTabsContainer').hide().addClass("activeBlog");

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
    $(".closeSvgBlog").click(function(){
      $(".fromAreasTabsContainer").hide();
    });
  });
});
