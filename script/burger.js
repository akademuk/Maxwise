

$(".burger").on("click", function(){
    $(".navbar").addClass("nav-open");
    $('body').addClass('body');
});
$(".burger-open").on("click", function(){
    $(".navbar").removeClass("nav-open");
    $('body').removeClass('body');
});