$(function(){
    noteCollection = new NoteCollection(Note);

    noteCollection.sync().done(function(){
        refresh(noteCollection);
    });
});
