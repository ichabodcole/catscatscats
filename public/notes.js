function Notes(){
    console.log("new Notes");
    this.notes = [];
    this.route = window.notesRoute.resource;
}

Notes.prototype.add = function(note){
    this.notes.push(note);
};

Notes.prototype.remove = function(id){
    this.notes.splice(id, 1);
};

Notes.prototype.save = function(){

};

Notes.prototype.all = function(){
    return this.notes;
};

Notes.prototype.get_by_id = function(id){
    return this.notes[id];
};

Notes.prototype.log = function(){
    console.log(this);
};

Notes.prototype.fetch_server = function(){
        $.ajax({
        url: this.route,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log("GET");
            console.log(this);
            $(data).each(function(index, curNote){
                var noteData = {
                                id: curNote.id,
                                subject: curNote.subject,
                                content: curNote.content
                            };
                var note = new Note(noteData);
                this.add(note);
            });
        },
        error: function(response, status){
            console.log(responce.responseText);
            console.log(status);
        }
    });
};

Notes.prototype.fetch = function(id){
    if(typeof(id) === "undefined" || typeof(id) !== "number"){
        return this.all();
    }else{
        return this.get_by_id(id);
    }
};
