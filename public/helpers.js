function pluck(array, key){
    var _array = [];
    $(array).each(function(index, element){
        _array.push(element[key]);
    });
    return _array;
}
