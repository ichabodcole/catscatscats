// Bootstrap all the buttons
$(function(){
    $("button").addClass("btn btn-primary");

    $("#btn-update").click(function(e){
        var id = Number($("#sel-noteid").val());
        var note = noteCollection.getById(id);
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        var data = {subject: subject, content: content};
        note.set(data);
    });

    $("#btn-create").click(function(e){
        var subject, content, data, note;

        subject = $("#txt-subject").val();
        content = $("#txt-content").val();
        data = {subject: subject, content: content};
        console.log(data);

        notes.add(new Note(data));
    });

    $("#sel-noteid").change(function(e){
        var id = $(this).val();
        var note = noteCollection.getById(id);
        var noteStr = buildNoteDisplayString(note.id, note.subject, note.content);
        var subject = note.subject;
        var content = note.content;
        $("#txt-subject").val(subject);
        $("#txt-content").val(content);
        $("#content .note-selection").addClass("alert alert-info").html(noteStr);
    });
});

