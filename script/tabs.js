
  if (screen.width >= 768) {
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
  }







  if (screen.width <= 767) {
    $(document).ready(function($) {
      $('.fromAreasTabsContainer').hide();
      $('.tabs li:first').removeClass('active');
      $('.tabs li').click(function(event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.fromAreasTabsContainer').hide().addClass("activeBlog");
        // $('.bodyOn').addClass('body');
        var selectTab = $(this).find('a').attr("href");
    
        $(selectTab).fadeIn();
        $(".closeSvgBlog").click(function(){
          $(".fromAreasTabsContainer").hide();
          $('.bodyOn').removeClass('body');
        });
      });
    });
  }
