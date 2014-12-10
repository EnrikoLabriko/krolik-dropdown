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
        //console.log(event.currentTarget);
        var node = event.currentTarget;
        // We'd like to do something like this:
        //     var index = node.parentNode.children.indexOf(node);
        // But NodeList doesn't support indexOf() method ¯\_(ツ)_/¯
        var index = [].indexOf.call(node.parentNode.children, node);
        //console.log('index: ', index);
        //console.log(options.items[index][1])
        if (options.items[index][1]) {
            options.items[index][1]()
        }
        if (node.classList.contains('dropdown-selected')) {
            node.classList.remove('dropdown-selected')
        } else {
            node.classList.add('dropdown-selected')
        }
    };

    //var newDiv = document.createElement('div');
    var div = document.getElementById(id);
    var ul = div.getElementsByTagName('ul')[0];
    var innerDiv = div.getElementsByTagName('div')[0];
    innerDiv.addEventListener('click', dropdownToggleOpen, false);
    //console.log(options.items.length);
    for (i = 0; i < options.items.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = options.items[i][0];
        ul.appendChild(li);
        li.addEventListener('click', dropdownItemClick, false)
    }

};