var Dropdown = function (id, options) {

    var dropdownToggleOpen = function () {
        //console.log('ul.style.display:', ul.style.display);
        //console.log('getComputedStyle(ul).display:', getComputedStyle(ul).display);
        if (getComputedStyle(ul).display == 'none') {
            ul.style.display = 'block';
            options.onOpen()
            //console.log('aaa');
        } else {
            ul.style.display = 'none';
            options.onClose()
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
        if (options.items[index]) {
            options.items[index]()
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
    if (options.event == 'click') {
        innerDiv.addEventListener('click', dropdownToggleOpen, false);
    } else if (options.event == 'hover') {
        innerDiv.addEventListener('mouseover', dropdownToggleOpen, false);
        innerDiv.addEventListener('mouseout', dropdownToggleOpen, false);

    }
    //console.log(options.items.length);
    for (i = 0; i < options.items.length; i++) {
        //var li = document.createElement('li');
        //ul.appendChild(li);
        //console.log(ul.children)
        console.log(ul.children[i].getAttribute('disabled'))
        if (ul.children[i].getAttribute('disabled') === null) {
            ul.children[i].addEventListener('click', dropdownItemClick, false)
        }
    }

};