// Bootstrap all the buttons
$(function(){
    $("button").addClass("btn btn-primary");

    $("#btn-create").click(function(e){
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        var note = new Note({subject: subject, content: content});
        noteCollection.add(note);
        note.create().done(function(data){
            buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"success");
            refresh(noteCollection);
        });
    });

    $("#btn-update").click(function(e){
        var id = Number($("#sel-noteid").val());
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        var note = noteCollection.getByCid(id);
        note.set({subject: subject, content: content});
        note.update().done(function(data){
            buildAlertDisplay({cid: note.cid, id: data.id, subject: data.subject, content: data.content},"success");
        });
    });

    $("#sel-noteid").change(function(e){
        var id = $(this).val();
        var note = noteCollection.getByCid(id);
        updateTextInput(note.subject, note.content);
        buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"info");
    });
});

