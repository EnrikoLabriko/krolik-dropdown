

function Dropdown(id) {

    var newDiv = document.createElement('div')
    var div = document.getElementById(id)
    div.addEventListener("click", handler, false)
}

var handler = function() {
    var ul = div.getElementsByTagName(ul)
    ul.style.display = "block"
    alert('Trololo')

}