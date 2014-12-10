var Dropdown = function (id, options) {

    var dropdownToggleOpen = function () {
        //console.log('ul.style.display:', ul.style.display);
        //console.log('getComputedStyle(ul).display:', getComputedStyle(ul).display);
        if (getComputedStyle(ul).display == 'none') {
            ul.style.display = 'block';
            //console.log('aaa');
        } else {
            ul.style.display = 'none';
            //console.log('bbb');
        }
    };

    var dropdownItemClick = function(event) {
        event.stopPropagation();
        console.log(event.currentTarget);
        if (event.currentTarget.classList.contains('dropdown-selected')) {
            event.currentTarget.classList.remove('dropdown-selected')
        } else {
            event.currentTarget.classList.add('dropdown-selected')
        }
    };

    var newDiv = document.createElement('div');
    var div = document.getElementById(id);
    var ul = div.getElementsByTagName('ul')[0];
    div.addEventListener('click', dropdownToggleOpen, false);
    //console.log(options.items.length);
    for (i = 0; i < options.items.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = options.items[i][0];
        ul.appendChild(li);
        li.addEventListener('click', dropdownItemClick, false)
    }

};