function Note(){
    this.baseUrl = "/note/";
    this.id = null;
    this.subject = null;
    this.content = null;
    // this.created_at
    //this.updated_at
}


//
Note.prototype.fetch = function(id){
    $.ajax({
        url: this.baseUrl + id,
        dataType: 'json',
        type: 'GET',
        success: function(data){
            this.subject = data['subject'];
            this.content = data['content'];
            console.log(this.subject);
        }
    });
};

Note.prototype.create = function(){
    var _this = this;
    $.ajax({
        url: this.baseUrl,
        dataType: 'json',
        type: 'PUT',
        data: {
            subject: this.subject,
            content: this.content
        },
        success: function(data){
            _this.subject = data['subject'];
            _this.content = data['content'];
            console.log(_this.subject);
        }
    });
};

Note.prototype.update = function(){

};

Note.prototype.remove = function(){

};

note = new Note();
note.subject = "AJAX";
note.content = "Is magic!";
note.create();

