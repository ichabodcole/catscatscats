function displayAllNotes(noteCollection){
    var str = "";
    // loop through the noteCollection.
    str += "<div>All Row Data: =======================><br>";
    $(noteCollection).each(function(index){
        var note = noteCollection[index];
        var noteCollectiontring = buildNoteDisplayString(note.id, note.subject, note.content);
        str += index + 1 + " - ";
        str += noteCollectiontring;
        str += "<br>";
    });
    str += "</div>";
    $("#content").append(str);
    console.log(noteCollection);
}

function buildNoteDisplayString(id, subject, content){
    var str = "id:" + id + ", " + "subject: " + subject + ", " + "subject: " + content;
    return str;
}

function updateSelectInput(notes){
    var noteIds = pluck(notes, "id");
    var htmlStr = "";
    $(noteIds).each(function(index, id){
       htmlStr += "<option>" + id + "</option>";
    });
    $("#sel-noteid").append(htmlStr);
}

function refresh(noteCollection){
    var notes = noteCollection.all();

    displayAllNotes(notes);
    updateSelectInput(notes);
}
