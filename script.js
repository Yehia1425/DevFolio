var typed = new Typed(".auto-type", {
    strings: ["Desginer", "Photographer", "Freelancer", "Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

var num1 = document.getElementById("count1")
var num2 = document.getElementById("count2")
var num3 = document.getElementById("count3")
var num4 = document.getElementById("count4")


function animatedCounter(element , start , end, duraction){
    var range = end - start;
    var current = start;
    var increment = 0 ;
    if (end> start) {
        increment = 1;
    }
    else{
        increment = -1;
    }

    var timer  = setInterval(function(){
        current += increment;
        element.textContent = current;
        if (current ==end) {
            clearInterval(timer)
        }
    },duraction);
}

animatedCounter(num1 , 1 , 400 , 10)
animatedCounter(num2 , 1 , 300 , 10)
animatedCounter(num3 , 1 , 500 , 10)
animatedCounter(num4 , 1 , 700 , 10)