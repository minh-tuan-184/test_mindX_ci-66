import { appToShortenLink } from "./bai3.js";

const content = document.getElementById("content");

function setScreen($container) {
    content.innerHTML = "";
    content.appendChild($container)
}

const $app = new appToShortenLink();

setScreen($app.$container);