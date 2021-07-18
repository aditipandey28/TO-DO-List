$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
	$(this).remove();	
	})
	
})
$("input[type='text']").keypress(function(event){
	// console.log("hbjbwh");
	if(event.which===13){
		var text=  $(this).val();
		$("ul").append("<li> "+ '<span><i class="far fa-trash-alt"></i></span> ' + text +" </li>")
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

});