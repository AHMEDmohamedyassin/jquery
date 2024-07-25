// closing popup function
function close_popup(){
    $(".popupCard").fadeOut(300 , function () {
        $(".popupContainer").addClass("hidden")
    })
}

// ready function 
$(function () {

    // opening
    $(".popupOpen").click(function (e) {
        e.preventDefault()     // to prevent submitting any form 
        $(".popupContainer").removeClass("hidden")
        $(".popupCard").fadeIn()
    })
    
    // closing on container click
    $("div.popupContainer").click(function(event) {
        // if(event.target != $(this)[0]) return // replaced with stopPropagation

        close_popup()
    })

    // stopPropagation
    $(".popupCard").click(function (e) {
        e.stopPropagation()
    })

    // closing using button
    $(".popupClose").click(function(){
        close_popup()
    })

    // closeing using keyboard ESC
    $(document).keydown(function (e) {
        if(e.keyCode == 27)
            close_popup()
    })

    // styling buttons 
    $("button").html(function (index , currentContent){
        return `
        <span class="w-0 h-full absolute top-0 left-0 bg-gray-200"></span>
        <span class="z-10 relative">${currentContent}</span>    
    `
    })

    // animating button
    $("button").hover(function () {
        $(this).children("span:eq(0)").animate({
            width : "100%"
        })
    } , function () {
        $(this).children("span:eq(0)").animate({
            width : 0
        })
    })
})