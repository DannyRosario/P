$("button").click(function(){
    var name = $(".name").val();
    var color = $(".color").val();
     var cookie = $(".cookie").val();
     $("body").append("hello" +
                        " " +
                        name +
                        " your favorite shirt is " +
                        color +
                        " and you will eat " +
                        (parseInt(cookie) * 365 * (2030 -2019)) +
                        " cookies by the years 2030");
});
