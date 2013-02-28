// Bootstrap all the buttons
$("button").addClass("btn btn-primary");

$("select").change(function(e){

});

$("#btn-create").click(function(e){
    var subject, content, data, note;

    subject = $("#txt-subject").val();
    content = $("#txt-content").val();
    data = {subject: subject, content: content};
    console.log(data);

    notes.add(new Note(data));
});

$("#my-button").click(function(e){
    alert();
});

$("#my-button").on("change", function(){

});

