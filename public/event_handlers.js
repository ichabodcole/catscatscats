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
        var cid = Number($("#sel-noteid").val());
        var subject = $("#txt-subject").val();
        var content = $("#txt-content").val();
        var note = noteCollection.getByCid(cid);
        note.set({subject: subject, content: content});
        note.update().done(function(data){
            buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"success");
            refresh(noteCollection);
        });
    });

    $("#btn-delete").click(function(){
        var cid = Number($("#sel-noteid").val());
        var note = noteCollection.remove(cid);
        note.destroy().done(function(){
            buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"warning");
            refresh(noteCollection);
        });
    });

    $("#sel-noteid").change(function(e){
        var id = $(this).val();
        var note = noteCollection.getByCid(id);
        updateTextInput(note.subject, note.content);
        buildAlertDisplay({cid: note.cid, id: note.id, subject: note.subject, content: note.content},"info");
    });
});

