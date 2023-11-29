import menu_hamburguesa from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js"
import scrollTopButton from "./dom/boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu_hamburguesa(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 14,2023 17:15:19","Feliz cumpleaños amigo.");
    scrollTopButton(".scroll-stop-btn");
});

d.addEventListener("keydown",e=>{
shortcuts(e);
moveBall(e,".ball",".stage");
})

