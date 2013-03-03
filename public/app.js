$(function(){
    noteCollection = new NoteCollection(Note);
    // var note2 = new Note();
    // note2.set({id: 2, subject: "Test subject 2", content: "Test content 2"});

    // noteCollection.add(note1);
    // noteCollection.add(note2);

    noteCollection.sync().done(function(){
        // var note1 = new Note({subject: "Test subject 1", content: "Test content 1"});
        // noteCollection.add(note1);
        refresh(noteCollection);
    });
    //Fill a note from the server.
});
