import menu_hamburguesa from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js"
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import resposiveMedia from "./dom/objeto_resposive.js";
import { resposiveTester } from "./dom/prueba_resposive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu_hamburguesa(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Nov 14,2023 17:15:19","Feliz cumpleaños amigo.");
    scrollTopButton(".scroll-stop-btn");
    resposiveMedia("youtube","(min-width: 1024px)","<a href='https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91'>Ver video</a>",`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=FiF_JTjBP33PKQg6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    resposiveMedia("gmaps","(min-width: 1024px)","Contenido Movil","Contenido Escritorio");
    resposiveTester("responsive-tester");
});

d.addEventListener("keydown",e=>{
shortcuts(e);
moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode")