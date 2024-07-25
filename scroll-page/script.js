$(function () {
    //scrolling to link
    $("span").click(function (){
        $("html").animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top - $("nav").outerHeight()
        })

        // $(this).addClass("text-red-500")
        // $(this).siblings().removeClass("text-red-500")
    })

    // style fix header
    $("body").css('paddingTop' , $("nav").outerHeight())


    // scorlling animations
    $(window).scroll(function () {
        let windowtop = $(this).scrollTop()
        
        // activate link on scroll to it
        $('div.sections').children('*').each(function() {
            if($(this).offset().top - $("nav").outerHeight() <= windowtop){
                $(`nav span[data-scroll='${$(this).attr("id")}']`).addClass("text-red-500")
                $(`nav span[data-scroll='${$(this).attr("id")}']`).siblings().removeClass("text-red-500")
            }
        })


        // show and hide scroll top button
        if(windowtop > 100) $("#top").fadeIn()
            else $("#top").fadeOut()


        // page progress bar
        $("#progressbar").animate({
            width : (windowtop / ( $("body").innerHeight() - $(window).innerHeight()) * 100) + "%"
        } , 10)
    })


    // scroll top button
    $("#top").click(function () {
        $("html").animate({
            scrollTop:0
        })
    })

    
})