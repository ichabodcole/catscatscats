function displayAllNotes(notes){
    var str = "";
    // loop through the notes.
    str += "<div>All Row Data: =======================><br>";
    $(notes).each(function(index){
        var note = notes[index];
        var noteString = buildNoteDisplayString(note.id, note.subject, note.content);
        str += index + 1 + " - ";
        str += noteString;
        str += "<br>";
    });
    str += "</div>";
    $("#content").append(str);
    console.log(notes);
}

function buildNoteDisplayString(id, subject, content){
    var str = "id:" + id + ", " + "subject: " + subject + ", " + "subject: " + content;
    return str;
}

function refresh(){
    displayAllNotes(noteList);
}

var notes = new Notes();
var note1 = new Note();
var note2 = new Note();

note1.set({id: 1, subject: "Test subject 1", content: "Test content 1"});
note2.set({id: 2, subject: "Test subject 2", content: "Test content 2"});

notes.add(note1);
notes.add(note2);

var noteList = notes.all();

refresh();

//Fill a note from the server.
