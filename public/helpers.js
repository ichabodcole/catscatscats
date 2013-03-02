function pluck(array, key){
    var _array = [];
    $.each(array, function(index, element){
        _array.push(element[key]);
    });
    return _array;
}
