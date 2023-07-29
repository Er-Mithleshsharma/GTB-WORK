var arr=document.querySelectorAll(".slide")
var count=0
var n=arr.length

/* for next slide */

$(".right").click(function(){
    console.log(count)
   if(count==n-1)
   {
        count=0
        arr[n-1].style.opacity="0"
   }
   else
   {
        arr[count].style.opacity="0"
        count++
   }
   arr[count].style.opacity="1"
})

/* for previous slide */

$(".left").click(function(){
    if(count==0)
    {   
        arr[count].style.opacity="0"
        count=n-1
    }
    else
    { 
        arr[count].style.opacity="0"
        count--
    }
    arr[count].style.opacity="1"
})

/* for autoplay slides */
function autoplay()
{
    if(count==n-1)
    {
        count=0
        arr[n-1].style.opacity="0"
    }
    else
    {
        count++
        arr[count-1].style.opacity="0"
    }
    arr[count].style.opacity="1"
}

setInterval(autoplay,2000)