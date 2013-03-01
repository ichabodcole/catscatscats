function Note(){
    console.log("New note");
    this.id = null;
    this.subject = null;
    this.content = null;
    this.route = "/note/";
    // console.log(this);
}

Note.prototype.set = function(data){
    this.id = data.id;
    this.subject = data.subject;
    this.content = data.content;
};

Note.prototype.sync = function(id){
    if(typeof(id) !== 'undefined' && typeof(id) == 'number'){
        this.id = id;
    }
    if(typeof(this.id) !== undefined && this.id !== null && typeof(id) == 'number'){
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
    }else{
        console.log("note:fetch - id not defined, or not number");
    }
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
