$(document).ready(function(){
    $(".faqRightAccardion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".faqRightAccardionContent").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
});
        