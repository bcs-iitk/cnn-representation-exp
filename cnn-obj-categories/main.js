var random_id;
$(document).ready(function(){
	random_id = Math.floor(100000000 + Math.random()*900000000);
})

function check(array, ind){
	for(k = 0; k < array.length; k++){
		if((array[k][0] == ind[0] && array[k][1] == ind[1]) || (array[k][0] == ind[1] && array[k][1] == ind[0])){
			return true;
		}
	}
	return false;
}
var index = []; var i; var j;
i = Math.floor(Math.random()*120)
j = Math.floor(Math.random()*120)
while(i == j){
	j = Math.floor(Math.random()*120)
}
while(check(index, [i, j])){
	i = Math.floor(Math.random()*120)
	j = Math.floor(Math.random()*120)
	while(i == j){
		j = Math.floor(Math.random()*120)
	}
}
index.push([i, j])
console.log(index)
$(".image1").attr("src", 'animals/stim'+i+'.png');
$(".image2").attr("src", 'animals/stim'+j+'.png');

function uncheck(){
    var k =1
    for(k = 1;k<9;k++){
        $('#'+k).prop("value","0");
		$('#'+k).tooltip('hide');
		$('#checkbox'+k).prop("checked", false);
		$('#rangetext'+k).text("Slide");
    }
	$('#'+k).prop("value","0");
	$('#'+k).tooltip('hide');
	$('#rangetext'+k).text("Slide");
}
$('#1').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext1').text("");
	$('#checkbox1').prop("checked", false);
});
$('#2').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext2').text("");
	$('#checkbox2').prop("checked", false);
});
$('#3').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext3').text("");
	$('#checkbox3').prop("checked", false);
});
$('#4').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext4').text("");
	$('#checkbox4').prop("checked", false);
});
$('#5').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext5').text("");
	$('#checkbox5').prop("checked", false);
});
$('#6').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext6').text("");
	$('#checkbox6').prop("checked", false);
});
$('#7').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext7').text("");
	$('#checkbox7').prop("checked", false);
});
$('#8').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext8').text("");
	$('#checkbox8').prop("checked", false);
});
$('#9').on('input change' ,function (){
	$(this).tooltip('show');
	$('#rangetext9').text("");
});
$('#checkbox1').change(function (){
	$('#1').prop("value", "0");
	$('#rangetext1').text("Slide");
	$('#1').tooltip('hide');
});
$('#checkbox2').change(function (){
	$('#2').prop("value", "0");
	$('#rangetext2').text("Slide");
	$('#2').tooltip('hide');
});
$('#checkbox3').change(function (){
	$('#3').prop("value", "0");
	$('#rangetext3').text("Slide");
	$('#3').tooltip('hide');
});
$('#checkbox4').change(function (){
	$('#4').prop("value", "0");
	$('#rangetext4').text("Slide");
	$('#4').tooltip('hide');
});
$('#checkbox5').change(function (){
	$('#5').prop("value", "0");
	$('#rangetext5').text("Slide");
	$('#5').tooltip('hide');
});
$('#checkbox6').change(function (){
	$('#6').prop("value", "0");
	$('#rangetext6').text("Slide");
	$('#6').tooltip('hide');
});
$('#checkbox7').change(function (){
	$('#7').prop("value", "0");
	$('#rangetext7').text("Slide");
	$('#7').tooltip('hide');
});
$('#checkbox8').change(function (){
	$('#8').prop("value", "0");
	$('#rangetext8').text("Slide");
	$('#8').tooltip('hide');
});
$("#foo").submit(function(event){
    var $form = $(this);
    submitform($form);
    i = Math.floor(Math.random()*120)
	j = Math.floor(Math.random()*120)
	while(i == j){
		j = Math.floor(Math.random()*120)
	}
	while(check(index, [i, j])){
		i = Math.floor(Math.random()*120)
		j = Math.floor(Math.random()*120)
		while(i == j){
			j = Math.floor(Math.random()*120)
		}
	}
	index.push([i, j])
	console.log(index)
    uncheck();
    $(".image1").attr("src","");
    $(".image2").attr("src","");
    $(".image1").attr("src", 'animals/stim'+i+'.png');
    $(".image2").attr("src", 'animals/stim'+j+'.png');
});
var request;
function submitform($form){
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    console.log($form)
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    
    var serializedData = 'image1='+i+'&';
    serializedData += 'image2='+j+'&';
    // Serialize the data in the form
    serializedData += $form.serialize();
	
	for(k=1;k<9;k++){
		if($('#checkbox'+k).prop("checked") == false){
			let elementname = $('#checkbox'+k).attr('name')
			serializedData += '&'+elementname+'=can'
		}
	}
	serializedData += '&random_id='+random_id;
    console.log(serializedData)
	
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);
    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzc4iXyaM74aK8-JvzhUQqe1n34VUVLstSpQVsONbCkuA-ec4U/exec",
        type: "post",
        data: serializedData
    });
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
    // Prevent default posting of form
    event.preventDefault();
}
$(".next2").click(function(){
    $("body").replaceWith("<p style  = 'text-align:center; font-size: 50px;'>Thank you for taking part in the experiment! <br> <br> Your experiment ID is "+random_id+".</p>");
})