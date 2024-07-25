$(function () {

    // gallery slider
    let imgs_len = $(".thumbnails").children().length

    $(".thumbnails img ").css({
        width : `${(600 / imgs_len) - 5 + 5 / imgs_len}px`,
        marginRight: `5px`,
        border : "2px solid #aaa"
    }).each(function () {
        $(this).click(function () {
            $(this).css({
                border:"2px solid #990000"
            })
            $(this).siblings().css({
                border : "2px solid #aaa"
            })
            $(".active_image").hide().attr("src" , $(this).attr('src')).fadeIn()
        })
    })


    // text writer
    let text = $("p").data('text')
    let n = 0;

    let interval = setInterval(function () {
        $("p").html(function (index , content) {
            return content + text[n]
        })
        n += 1

        if(n >= text.length) clearInterval(interval)
    } , 20)

})