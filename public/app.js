$(function(){
    var noteCollection = new NoteCollection(Note);
    // var note1 = new Note();
    // var note2 = new Note();

    // note1.set({id: 1, subject: "Test subject 1", content: "Test content 1"});
    // note2.set({id: 2, subject: "Test subject 2", content: "Test content 2"});

    // noteCollection.add(note1);
    // noteCollection.add(note2);

    noteCollection.sync().done(function(){
        refresh(noteCollection);
    });

    //Fill a note from the server.
});
