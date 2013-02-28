function Note(data){
    console.log("New note");
    this.id = data["id"];
    this.subject = data["subject"];
    this.content = data["content"];
    this.route = window.noteRoute.resource;
    // console.log(this);
}

Note.prototype.fetch = function(){
    $.ajax({
        url: this.route + this.id,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log("GET");
            console.log(this);
        },
        error: function(response, status){
            console.log(response.responseText);
            console.log(status);
        }
    });
};

Note.prototype.save = function(){
    $.ajax({
        url: this.route + this.id,
        type: 'POST',
        dataType: 'json',
        data: this.getJsonData(),
        success: function(data){
            console.log("POST");
            console.log(this);
        },
        error: function(response, status){
            console.log(responce.responseText);
            console.log(status);
        }
    });
};

Note.prototype.destroy = function(){
    $.ajax({
        url: this.route + this.id,
        type: 'DELETE',
        success: function(data, status){
            console.log("DELETE");
            console.log(this);
        },
        error: function(response, status){
            console.log(responce.responseText);
            console.log(status);
        }
    });
};

Note.prototype.getJsonData = function(){
    var data = {subject: this.subject, content: this.content};
    return JSON.stringify(data);
};

Note.prototype.changed = function(){

};
