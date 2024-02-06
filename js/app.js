document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.getElementById("menuNav");

        // Obtener la posición actual de la barra de desplazamiento
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        // Cambiar la clase del header dependiendo de la posición del scroll
        if (scrollPosition > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });



    var customCursor = document.getElementById("custom-cursor");
    var cursor_back = document.getElementById("cursor_back");

    document.addEventListener("mousemove", function(event) {
        var x = event.clientX - 10;
        var y = event.clientY - 10;

        customCursor.style.transform = "translate(" + x + "px, " + y + "px)";
        cursor_back.setAttribute("style", "top: " + (event.pageY -10) + "px; left: " + (event.pageX - 15) + "px;");
    });


});
