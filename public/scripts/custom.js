
$('.has-child').click(function(e){
    e.preventDefault()
})

$('.nav-link').click(function(e){
    $('.level-2>li').removeClass('--active')
    $(this).parents('.nav-item').removeClass('child-show')
    $(this).parents('.nav-item').siblings('.nav-item').removeClass('child-show')
})
$('.product .level-2>li>a').click(function(e){
    e.preventDefault()
    $(this).parents('.product').addClass('child-show')
    $(this).parent('li').siblings('li').removeClass('--active')
    $(this).parent('li').toggleClass('--active')
})