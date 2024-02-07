document.addEventListener("DOMContentLoaded", function() {

    //menu stick
    $(document).ready(function(){
        var altura = $('#menuNav').offset().top;
        
        $(window).on('scroll', function(){
            if ( $(window).scrollTop() > altura ){
                $('#menuNav').addClass('menu-fixed');
            } else {
                $('#menuNav').removeClass('menu-fixed');
            }
        });
    
    });


    //loader
    setTimeout(function() {
        // Oculta el loader y muestra el contenido después de cierto tiempo
        document.getElementById("loader-wrapper").style.display = "none";
        document.getElementById("cursor").style.display = "block";
        document.getElementById("content").style.display = "block";

    }, 3000); // Simula un tiempo de carga de 2 segundos


    var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        cursorVisible: true,
        cursorEnlarged: false,
        CoursorColor: true,
        $dot: document.querySelector(".cursor-dot"),
        $outline: document.querySelector(".cursor-dot-outline"),
      
        init: function () {
          // Configuracion de tamaños de elementos
          this.setupEventListeners();
          this.animateDotOutline();
        },
      
        setupEventListeners: function () {
          var self = this;
      
          // Ancho del hovering
          document.querySelectorAll("a").forEach(function (el) {
            el.addEventListener("mouseover", function () {
              self.CoursorColor = false;
              self.toggleColor();
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener("mouseout", function () {
              self.CoursorColor = true;
              self.toggleColor();
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });

          document.querySelectorAll("button").forEach(function (el) {
            el.addEventListener("mouseover", function () {
              self.CoursorColor = false;
              self.toggleColor();
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener("mouseout", function () {
              self.CoursorColor = true;
              self.toggleColor();
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });
      
          // Eventos click
          document.addEventListener("mousedown", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          document.addEventListener("mouseup", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
      
          document.addEventListener("mousemove", function (e) {
            // Mostar el cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();
      
            // Posición de el punto
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + "px";
            self.$dot.style.left = self.endX + "px";
          });
      
          // Oculta/mostrar cursor
          document.addEventListener("mouseenter", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
          });
      
          document.addEventListener("mouseleave", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
          });
        },
      
        animateDotOutline: function () {
          var self = this;
      
          self._x += (self.endX - self._x) / self.delay;
          self._y += (self.endY - self._y) / self.delay;
          self.$outline.style.top = self._y + "px";
          self.$outline.style.left = self._x + "px";
          requestAnimationFrame(this.animateDotOutline.bind(self));
        },
      
        toggleCursorSize: function () {
          var self = this;
      
          if (self.cursorEnlarged) {
            self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
            self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
          } else {
            self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
            self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
          }
        },
      
        toggleColor: function () {
          if (this.CoursorColor) {
            this.$dot.style.visibility = "visible";
            this.$outline.style.visibility = "visible";
          } else {
            this.$dot.style.visibility = "hidden";
            this.$outline.style.visibility = "hidden";
          }
        },
      
        toggleCursorVisibility: function () {
          var self = this;
          if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
          } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
          }
        }
      };
      
      cursor.init();


});
