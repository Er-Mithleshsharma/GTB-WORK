/* for next slides */
$(".right").click(function()
{
    if($(".slide.active").next(".slide").length!=0)                 /* for slide 1 to 3 */
    {
        $(".slide.active").removeClass("active").next(".slide").addClass("active")

        /* $(".slide.active").removeClass("active") :- current slide hide
        next(".slide").addClass("active") :- next slide show */

        $("li.active2").removeClass("active2").next("li").addClass("active2")

    }
    else                                    /* to go from 3rd slide to 1st slide */           
    {
        $(".slide.active").removeClass("active")
        $(".slide:first").addClass("active")

        $("li.active2").removeClass("active2")
        $("li:first").addClass("active2")
    }
})

/* for previous slides */
$(".left").click(function()
{
    if($(".slide.active").prev(".slide").length!=0)                 /* for slide 3 to 1 */
    {
        $(".slide.active").removeClass("active").prev(".slide").addClass("active")

        /* $(".slide.active").removeClass("active") :- current slide hide
        prev(".slide").addClass("active") :- previous slide show */

        $("li.active2").removeClass("active2").prev("li").addClass("active2")

    }
    else                                    /* to go from 1st slide to 3rd slide */           
    {
        $(".slide.active").removeClass("active")
        $(".slide:last").addClass("active")

        $("li.active2").removeClass("active2")
        $("li:last").addClass("active2")
    }
})

/* for autoplay slides */
function autoplay()
{
    if($(".slide.active").next(".slide").length!=0)                 /* for slide 1 to 3 */
    {
        $(".slide.active").removeClass("active").next(".slide").addClass("active")

        /* $(".slide.active").removeClass("active") :- current slide hide
        next(".slide").addClass("active") :- next slide show */

        $("li.active2").removeClass("active2").next("li").addClass("active2")

    }
    else                                    /* to go from 3rd slide to 1st slide */           
    {
        $(".slide.active").removeClass("active")
        $(".slide:first").addClass("active")

        $("li.active2").removeClass("active2")
        $("li:first").addClass("active2")
    }
    // setTimeout(function(){
    //     autoplay()
    // },2000)
    // setInterval(autoplay(),2000)
    // autoplay()
}

// autoplay()
// setTimeout(function(){
//     autoplay()
// },2000)
setInterval(autoplay,2000)



