$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $(".text").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $(".text").animate({marginLeft :'0px'},50)
})



/* count */
const myClock = $('#app').squareCountDownClock({
    countdownDate: 'Aug 24, 2024 15:37:25',
    topColor: 'orange',
    bottomColor: null, 
    innerLabelColor: '#fff'
})

myClock.startTimer();
/* count */


/* text area */
var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var length = maxLength - length;
    $('#chars').text(length);
});

