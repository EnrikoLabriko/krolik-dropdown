var Dropdown = function (id) {
    var handler = function () {
        var ul = div.getElementsByTagName('ul')[0];
        var ulStyleDisplay = ul;
        console.log('ul.style.display:', ul.style.display);
        console.log('getComputedStyle(ul).display:', getComputedStyle(ul).display);
        if (getComputedStyle(ul).display == 'none') {
            ul.style.display = 'block';
            console.log('aaa');
        } else {
            ul.style.display = 'none';
            console.log('bbb');
        }
    };

    var newDiv = document.createElement('div');
    var div = document.getElementById(id);
    div.addEventListener("click", handler, false)
};