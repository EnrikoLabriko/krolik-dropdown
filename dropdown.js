var Dropdown = function (id, options) {

    var dropdownToggleOpen = function() {
        if (getComputedStyle(ul).display == 'none') {
            ul.style.display = 'block';
            options.onOpen()
        } else {
            ul.style.display = 'none';
            options.onClose()
        }
    };

    var dropdownOpen = function() {
        ul.style.display = 'block';
        options.onOpen()
    };

    var dropdownClose = function() {
        if (getComputedStyle(ul).display != 'none') {
            ul.style.display = 'none';
            options.onClose()
        }

    };

    var dropdownItemClick = function(event) {
        event.stopPropagation();
        var node = event.currentTarget;
        // We'd like to do something like this:
        //     var index = node.parentNode.children.indexOf(node);
        // But NodeList doesn't support indexOf() method ¯\_(ツ)_/¯
        var index = [].indexOf.call(node.parentNode.children, node);
        if (options.items[index]) {
            options.items[index]()
        }
        dropdownClose()
    };

    var div = document.getElementById(id);
    var ul = div.getElementsByTagName('ul')[0];
    var innerDiv = div.getElementsByTagName('div')[0];
    if (options.event == 'click') {
        innerDiv.addEventListener('click', dropdownToggleOpen, false);
    } else if (options.event == 'hover') {
        div.addEventListener('mouseenter', dropdownOpen, false);
        div.addEventListener('mouseleave', dropdownClose, false);

    }
    for (i = 0; i < options.items.length; i++) {
        if (ul.children[i].getAttribute('disabled') === null) {
            ul.children[i].addEventListener('click', dropdownItemClick, false)
        }
    }

};