var list = document.querySelectorAll("li");
for (var i = 0, len = list.length; i < len; i++) {
    list[i].onclick = function(e) {
        var t = e.target;
        var c = t.style.backgroundColor;
        var p = document.getElementsByClassName("color-picker")[0];
        p.innerHTML = c;
        p.style.color = c;
    }
}