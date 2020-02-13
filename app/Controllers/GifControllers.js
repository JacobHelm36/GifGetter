import gifService from "../Services/GifService.js";
import store from "../store.js";

//Private
function _draw() {
  let gif = store.State.gif;
  console.log(gif);
}

//Public
export default class GifController {
  constructor() {
    store.subscribe("gif", _draw);
  }
}