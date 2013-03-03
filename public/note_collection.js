function NoteCollection(noteModel){
    console.log("new NoteCollection");
    this.noteCount = 0;
    this.notes = [];
    this.route = "/notes";
    this.noteModel = noteModel;
}

NoteCollection.prototype.add = function(note){
    this.noteCount++;
    note.set({cid: this.noteCount});
    this.notes.push(note);
    return note;
};

NoteCollection.prototype.remove = function(id){
    var note = this.notes.splice(id, 1);
    note.destroy();
};

NoteCollection.prototype.all = function(){
    return this.notes;
};

NoteCollection.prototype.getByCid = function(cid){
    var note;
    $.each(this.notes, function(index, element){
        if(Number(element.cid) === Number(cid)){
            note = element;
        }
    });
    return note;
};

NoteCollection.prototype.getById = function(id){
    var note;
    $.each(this.notes, function(index, element){
        if(Number(element.id) === Number(id)){
            note = element;
        }
    });
    return note;
};

NoteCollection.prototype.sync = function(){
    return this.fetch();
};

NoteCollection.prototype.fetch = function(){
    var _ref = this;
    return $.ajax({
        url: this.route,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log("GET");
            console.log(_ref);
            $.each(data, function(index, curNote){
                var noteData = {
                    id: curNote.id,
                    subject: curNote.subject,
                    content: curNote.content
                };
                var note = new _ref.noteModel(noteData);
                _ref.add(note);
            });
        },
        error: function(response, status){
            console.log(responce.responseText);
            console.log(status);
        }
    });
};
