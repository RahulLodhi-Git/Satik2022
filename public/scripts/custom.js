
$('.has-child').click(function (e) {
    e.preventDefault()
})


$(window).resize(function () {
    if ($(window).width() <=768) {
        //  for responsive header
        $('body').addClass('mobile')
        $('.mobile .nav-item.has-child .nav-link').click(function (e) {
            $(this).parents('.nav-item').siblings().children('.level-2').slideUp(500)
            $(this).parents('.nav-item').children('.level-2').slideToggle(500)
        })
        $('.mobile .level-2 >li>a').click(function (e) {
            $(this).parents('.level-2 >li').siblings().children('.level-3').slideUp(500)
            $(this).parents('.level-2 >li').children('.level-3').slideToggle(500)
        })
    }
    else {
        //  for desktop
        $('body').removeClass('mobile')
        $('body').click(function(){
            $('.nav-item').removeClass('child-show')
        })
        
        $('.level-2').click(function(e){
            e.stopPropagation()
        })  
        $('.nav-link').click(function (e) {
            $('.level-2>li').removeClass('--active')
            $(this).parents('.nav-item').removeClass('child-show')
            $(this).parents('.nav-item').siblings('.nav-item').removeClass('child-show')
        })
        $(' .product .level-2>li>a').click(function (e) {
            e.preventDefault()
            $(this).parents('.product').addClass('child-show')
            $(this).parent('li').siblings('li').removeClass('--active')
            $(this).parent('li').toggleClass('--active')
        })
    }
});

$(document).ready(function () {
    if ($(window).width() <=768) {
        //  for responsive header
        $('body').addClass('mobile')
        $(' .mobile .nav-item.has-child .nav-link').click(function (e) {
            $(this).parents('.nav-item').siblings().children('.level-2').slideUp(500)
            $(this).parents('.nav-item').children('.level-2').slideToggle(500)
        })
        $('.mobile  .level-2 >li>a').click(function (e) {
            $(this).parents('.level-2 >li').siblings().children('.level-3').slideUp(500)
            $(this).parents('.level-2 >li').children('.level-3').slideToggle(500)
        })
    }
    else {
        //  for desktop
        $('body').click(function(){
            $('.nav-item').removeClass('child-show')
            $('.level-2>li').removeClass('--active')
        })
        
        $('.level-2').click(function(e){
            e.stopPropagation()
        })  
        $('.nav-link').click(function (e) {
            $('.level-2>li').removeClass('--active')
            $(this).parents('.nav-item').removeClass('child-show')
            $(this).parents('.nav-item').siblings('.nav-item').removeClass('child-show')
        })
        $(' .product .level-2>li>a').click(function (e) {
            e.preventDefault()
            $(this).parents('.product').addClass('child-show')
            $(this).parent('li').siblings('li').removeClass('--active')
            $(this).parent('li').toggleClass('--active')
        })
    }
});











