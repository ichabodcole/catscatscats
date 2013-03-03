// Bootstrap all the buttons
$(function(){
    $("button").addClass("btn btn-primary");

    $("#btn-update").click(function(e){
        var id = Number($("#sel-noteid").val());
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        var note = noteCollection.getByCid(id);
        note.set({subject: subject, content: content});
        note.update();
        buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"success");
    });

    $("#btn-create").click(function(e){
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        var data = {subject: subject, content: content};
        var note = noteCollection.add(new Note(data));
        buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"success");
        refresh(noteCollection);
    });

    $("#sel-noteid").change(function(e){
        var id = $(this).val();
        var note = noteCollection.getByCid(id);
        updateTextInput(note.subject, note.content);
        buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"info");
    });
});

