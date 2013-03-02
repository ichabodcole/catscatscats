// Bootstrap all the buttons
$(function(){
    $("button").addClass("btn btn-primary");

    $("#btn-update").click(function(e){
        var id = Number($("#sel-noteid").val());
        var note = noteCollection.getById(id);
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        note.set({subject: subject, content: content});
        buildAlertDisplay({id: note.id, subject: note.subject, content: note.content},"success");
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
        updateTextInput(note.subject, note.content);
        buildAlertDisplay({id: note.id, subject: note.subject, content: note.content},"info");
    });
});

