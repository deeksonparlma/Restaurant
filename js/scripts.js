<<<<<<< HEAD


$(document).ready(function(){
  $("#selectForm").submit(function(event){
    event.preventDefault();
    var x = $("input[name=a1]:checked").val();
    var z = $("input[name=a2]:checked").val();
    var w = $("input[name=a3]:checked").val();
    var y = $("input[name=a4]:checked").val();
    var increment = -1;
    price=0

    items=[x,z,w,y];
    values=["1","2","3","4"];
    totalValues=[];
    for(i=0;i<=items.length;i++){
       if(items[i]==values[i]){
           increment +=1
           document.getElementById("counter").innerHTML = increment;
           t=totalValues.push(parseInt(values));

           price+=t;
           document.getElementById("price").innerHTML = price-=1;

        }
       }

    // for(j=0;j<=values.length;j++){
    //     finalPrice=parseInt(values)
    //     price+=finalPrice[j];
    //     document.getElementById("price").innerHTML = price;
    // }

});
});





=======
>>>>>>> e57c1811783cbed0d1f00e29cd31e89201fbd9b6
$(document).ready(function(){
  $("#display").click(function(){
    $(".navbar").slideToggle(800);
  });
  $("#morning").click(function(){
    $("#breakfast").slideDown(800);
    $("#lunch").slideUp(800);
    $("#dinner").slideUp(800);
    $("#startUp").hide(1500);
  });
  $("#noon").click(function(){
    $("#lunch").slideDown(800);
    $("#breakfast").slideUp(800);
    $("#dinner").slideUp(800);
    $("#startUp").hide(800);
  });
  $("#night").click(function(){
    $("#dinner").slideDown(800);
    $("#breakfast").slideUp(800);
    $("#lunch").slideUp(800);
    $("#startUp").hide(800);
  });
  $("#orderBreakfast").click(function(){
    $("#choice1").slideDown(80);
  });
  $("#orderLunch").click(function(){
    $("#choice2").slideDown(80);
  });
  $("#orderDinner").click(function(){
    $("#choice3").slideDown(80);
  });
  $("#packageOne").click(function(){
    $("#content1").slideToggle(80);
  });
  $("#packageTwo").click(function(){
    $("#content2").slideToggle(80);
  });
});
$("#orderBreakfast").click(function(event){
        event.preventDefault();
        $("#food").slideToggle(800);
});

var x = document.getElementById("myCheck1").value;
var z = document.getElementById("myCheck1").value;
var w = document.getElementById("myCheck1").value;
var y = document.getElementById("myCheck1").value;
var increment = 0;

function increase(){
  if (x=true){
    increment+=1;
    document.getElementById("counter").innerHTML = increment;
  }
}




$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});
