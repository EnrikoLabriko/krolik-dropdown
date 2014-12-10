var Dropdown = function(id, options) {

    var dropdownToggleOpen = function() {
        if (getComputedStyle(ul).display == 'none') {
            dropdownOpen();
        } else {
            dropdownClose();
        }
    };

    var dropdownOpen = function() {
        if (getComputedStyle(ul).display != 'block') {
            ul.style.display = 'block';
            if (options.onOpen) {
                options.onOpen();
            }
        }
    };

    var dropdownClose = function() {
        if (getComputedStyle(ul).display != 'none') {
            ul.style.display = 'none';
            if (options.onClose) {
                options.onClose();
            }
        }
    };

    var dropdownItemClick = function() {
        event.stopPropagation();

        var node = event.currentTarget;

        // I'd like to do something like this:
        //     var index = ul.children.indexOf(node);
        // But NodeList doesn't support indexOf() method ¯\_(ツ)_/¯
        var index = [].indexOf.call(ul.children, node);
        if (options.items[index]) {
            options.items[index]()
        }

        dropdownClose();
    };

    var div = document.getElementById(id);
    var ul = div.getElementsByTagName('ul')[0];
    var innerDiv = div.getElementsByTagName('div')[0];

    if (!options.event || options.event == 'click') {
        innerDiv.addEventListener('click', dropdownToggleOpen, false);
    } else if (options.event == 'hover') {
        div.addEventListener('mouseenter', dropdownOpen, false);
        div.addEventListener('mouseleave', dropdownClose, false);
    }

    for (var i = 0; i < options.items.length; i++) {
        var li = ul.children[i];
        if (li.getAttribute('disabled') === null) {
            li.addEventListener('click', dropdownItemClick, false);
        }
    }
};
