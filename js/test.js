
$(function(){
	$(".submit").on('click', function() {
        alert("in");
        $("#submit").CSS('background','red');
    });
//	$("#submit").on('click', function() {
//	  var name = $("#name").val(),
//				age = $("#age").val(),
//				height = $("#height").val(),
//				weight = $("#weight").val();
//		
//    if (30 <= age && age <= 35 && height >= 175){
//			$(".final").text(name + "恭喜你可以和小美相親 1");
//		
//	  }else if(30 <= age && age <= 35 && weight <= 70){
//		  $(".final").text(name + "恭喜你可以和小美相親 2");
//		
//	  }else if(height >= 175 && weight <= 70){
//		  $(".final").text(name + "恭喜你可以和小美相親 3");
//		
//	  }else{
//		  $(".final").text("抱歉" + name + "，你無法和小美相親喔");
//	  }
//		
//  });
});
