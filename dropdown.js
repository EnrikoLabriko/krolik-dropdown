var Dropdown = function (id, options) {

    var toggleOpen = function () {
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
    var ul = div.getElementsByTagName('ul')[0];
    div.addEventListener("click", toggleOpen, false);
    console.log(options.items.length)
    for (i = 0; i < options.items.length; i++) {
        var li = document.createElement('li');
        li.innerText = options.items[i];
        ul.appendChild(li)
    }
};