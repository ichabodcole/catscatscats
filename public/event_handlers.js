// Bootstrap all the buttons
$(function(){
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

    $("#sel-noteid").change(function(e){
        var id = $(this).val();
        var note = noteCollection.getById(id);
        var noteStr = buildNoteDisplayString(note.id, note.subject, note.content);
        $("#content .note-selection").addClass("alert alert-info").html(noteStr);
    });
});

