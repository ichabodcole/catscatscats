function NoteCollection(noteModel){
    console.log("new NoteCollection");
    this.notes = [];
    this.route = "/notes";
    this.noteModel = noteModel;
}

NoteCollection.prototype.add = function(note){
    this.notes.push(note);
};

NoteCollection.prototype.remove = function(id){
    this.notes.splice(id, 1);
};

NoteCollection.prototype.save = function(){

};

NoteCollection.prototype.all = function(){
    return this.notes;
};

NoteCollection.prototype.get_by_id = function(id){
    return this.notes[id];
};

NoteCollection.prototype.log = function(){
    console.log(this);
};

NoteCollection.prototype.sync = function(){
    var _ref = this;
        return $.ajax({
        url: this.route,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log("GET");
            console.log(_ref);
            $(data).each(function(index, curNote){
                var noteData = {
                                id: curNote.id,
                                subject: curNote.subject,
                                content: curNote.content
                            };
                var note = new _ref.noteModel();
                note.set(noteData);
                _ref.add(note);
            });
        },
        error: function(response, status){
            console.log(responce.responseText);
            console.log(status);
        }
    });
};

NoteCollection.prototype.fetch = function(id){
    if(typeof(id) === "undefined" || typeof(id) !== "number"){
        return this.all();
    }else{
        return this.get_by_id(id);
    }
};
