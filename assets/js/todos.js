// Check of specific todos by checking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on button(X) todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todoext
        var todotext = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});