function Note(){
    this.baseUrl = "/note/";
    this.id = null;
    this.subject = null;
    this.content = null;
}
Note.prototype.updateIdSelection = function(){
    $.ajax({
        url: "/notes",
        dataType: 'json',
        type: 'GET',
        success: function(data){
            $("#txt-noteid").html("");
            $(data).each(function(index){
                var curId = data[index]["id"];
                $("#txt-noteid").append('<option value="' + curId + '">'+curId+'</option>');
            });
        }
    });
};

Note.prototype.fetchAll = function(){
    $.ajax({
        url: "/notes",
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var str = "All Row Data: =======================><br>";
            $(data).each(function(index){
                var subject = data[index]["subject"];
                var content = data[index]["content"];
                str += "id:" + data[index]["id"] + ", subject: " + subject + ", content:"+ content + "<br>";
            });
            $("#content").append(str);
        }
    });
};
//
Note.prototype.fetch = function(id){
    var _this = this;
    $.ajax({
        url: this.baseUrl + id,
        dataType: 'json',
        type: 'GET',
        success: function(data){
            _this.subject = data['subject'];
            _this.content = data['content'];
            console.log(this.subject);
            $("#content").html("<div class='alert alert-info'><strong>GET</strong> id:" + data["id"] + ", " +_this.subject+", "+_this.content+"</div>");
            note.fetchAll();
            $("#txt-subject").val(_this.subject);
            $("#txt-content").val(_this.content);
        }
    });
};

Note.prototype.create = function(){
    var _this = this;
    $.ajax({
        url: this.baseUrl,
        dataType: 'json',
        type: "PUT",
        data: JSON.stringify({subject: this.subject, content: this.content}),
        success: function(data){
            _this.subject = data['subject'];
            _this.content = data['content'];
            console.log(_this.subject);
            $("#content").html("<div class='alert alert-success'><strong>PUT</strong> id:" + data["id"] + ", " + data['subject']+", "+data['content']+"</div>");
            refresh();
        },
        error: function(e){
            console.log(e.responseText);
        }
    });
};

Note.prototype.update = function(id){
    var _this = this;
    $.ajax({
        url: this.baseUrl + id,
        dataType: 'json',
        type: 'POST',
        data:JSON.stringify({subject: this.subject, content: this.content}),
        success: function(data){
            _this.subject = data['subject'];
            _this.content = data['content'];
            console.log(_this.subject);
            $("#content").html("<div class='alert alert-success'><strong>POST</strong> id:" + data["id"] + ", " + data['subject']+", "+data['content']+"</div>");
            note.fetchAll();
        },
        error: function(e){
            console.log(e.responseText);
        }
    });
};

Note.prototype.remove = function(id){
    $.ajax({
        url: this.baseUrl + id,
        dataType: 'json',
        type: 'DELETE',
        success: function(data){
            $("#content").html("<div class='alert alert-warning'><strong>DELETE</strong> Content with id: " + id + " deleted.</div>");
            refresh();
        },
        error: function(e){
            console.log(e.responseText);
        }
    });
};

note = new Note();

$("button").addClass("btn btn-primary");

$("#btn-create").click(function(){
    note.subject = $("#txt-subject").val();
    note.content = $("#txt-content").val();
    note.create();
});

$("#btn-update").click(function(){
    id = $("#txt-noteid").val();
    note.subject = $("#txt-subject").val();
    note.content = $("#txt-content").val();
    note.update(id);
});

$("#btn-delete").click(function(){
    id = $("#txt-noteid").val();
    note.remove(id);
});

$("#txt-noteid").change(function(){
    id = $("#txt-noteid").val();
    note.fetch(id);
});

function refresh(){
    note.updateIdSelection();
    note.fetchAll();
}
refresh();
