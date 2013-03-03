// Todo create view class
// function View(){

// }

function displayAllNotes(noteCollection){
    var str = "";
    // loop through the noteCollection.
    str += "All Row Data: =======================><br>";
    $(noteCollection).each(function(index){
        var note = noteCollection[index];
        var noteCollectiontring = buildNoteDisplayString(note.cid, note.id, note.subject, note.content);
        str += index + 1 + " - ";
        str += noteCollectiontring;
        str += "<br>";
    });
    str += "";
    $("#content #all-notes").html(str);
    console.log(noteCollection);
}

function buildNoteDisplayString(cid, id, subject, content){
    var str = "cid: <em>\"" + cid + "\"</em>, " +
    "id: <em>\"" + id + "\"</em>, " +
    "subject: <em>\"" + subject + "\"</em>, " +
    "content: <em>\"" + content + "\"</em>";
    return str;
}

function buildAlertDisplay(data, alertType){
    var noteStr = buildNoteDisplayString(data.cid, data.id, data.subject, data.content);
    $("#content #note-selection").attr("class", "alert alert-" + alertType).html(noteStr);
}

function updateSelectInput(notes){
    var noteCids = pluck(notes, "cid");
    var htmlStr = "";
    $(noteCids).each(function(index, cid){
       htmlStr += "<option>" + cid + "</option>";
    });
    $("#sel-noteid").html(htmlStr);
}

function updateTextInput(subject, content){
    $("#txt-subject").val(subject);
    $("#txt-content").val(content);
}

function refresh(collection){
    var notes = collection.all();
    displayAllNotes(notes);
    updateSelectInput(notes);
}
