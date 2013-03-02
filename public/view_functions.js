// Todo create view class
// function View(){

// }

function displayAllNotes(noteCollection){
    var str = "";
    // loop through the noteCollection.
    str += "All Row Data: =======================><br>";
    $(noteCollection).each(function(index){
        var note = noteCollection[index];
        var noteCollectiontring = buildNoteDisplayString(note.id, note.subject, note.content);
        str += index + 1 + " - ";
        str += noteCollectiontring;
        str += "<br>";
    });
    str += "";
    $("#content #all-notes").html(str);
    console.log(noteCollection);
}

function buildNoteDisplayString(id, subject, content){
    var str = "id: <em>\"" + id + "\"</em>, " +
    "subject: <em>\"" + subject + "\"</em>, " +
    "content: <em>\"" + content + "\"</em>";
    return str;
}

function buildAlertDisplay(data, alertType){
    var noteStr = buildNoteDisplayString(data.id, data.subject, data.content);
    $("#content #note-selection").attr("class", "alert alert-" + alertType).html(noteStr);
}

function updateSelectInput(notes){
    var noteIds = pluck(notes, "id");
    var htmlStr = "";
    $(noteIds).each(function(index, id){
       htmlStr += "<option>" + id + "</option>";
    });
    $("#sel-noteid").append(htmlStr);
}

function updateTextInput(subject, content){
    $("#txt-subject").val(subject);
    $("#txt-content").val(content);
}

function refresh(noteCollection){
    var notes = noteCollection.all();
    displayAllNotes(notes);
    updateSelectInput(notes);
}
