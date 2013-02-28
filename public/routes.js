function Router(route){
    this.resource = route;
}

window.noteRoute = new Router("/note/");
window.notesRoute = new Router("/notes");
