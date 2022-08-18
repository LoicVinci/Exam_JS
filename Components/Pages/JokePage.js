import HomePage from "./HomePage";
import { Redirect } from "../Router/Router";
import ChristmasImage from "../../img/Christmas.jpg";
import PunImage from "../../img/Pun.jpg";
import ProgrammingImage from "../../img/Programming.jpg";
import jokesJson from "../../utils/jokes.js";

/**
 * Render the NewPage :
 * Just an example to demonstrate how to use the router to "redirect" to a new page
 */
function JokePage() {
  // Deal with your NewPage content here
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = `
    <div>
    <img src="${ChristmasImage}" id="img1" alt="Christmas">
    <img src="${PunImage}" id="img2" alt="Pun">
    <img src="${ProgrammingImage}" id="img3" alt="Programming">
    </div>
  `;

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  img1.addEventListener("click", onClick1);
  img2.addEventListener("click", onClick2);
  img3.addEventListener("click", onClick3);

  const bouton = document.createElement("button");
  bouton.innerHTML="Reselect a joke";
  pageDiv.appendChild(bouton);
  bouton.addEventListener("click", reload);

  function onClick1(e) {
    e.preventDefault();
    
    img1.parentNode.removeChild(img1);
    img2.parentNode.removeChild(img2);
    img3.parentNode.removeChild(img3);

    /*
    const theJokes = fetch(jokesJson);
    const texts = theJokes.parse();
    console.log(texts);
    */

  }

  function onClick2(e) {
    e.preventDefault();
    
    img1.parentNode.removeChild(img1);
    img2.parentNode.removeChild(img2);
    img3.parentNode.removeChild(img3);

  }

  function onClick3(e) {
    e.preventDefault();
    
    img1.parentNode.removeChild(img1);
    img2.parentNode.removeChild(img2);
    img3.parentNode.removeChild(img3);

  }

  function reload(e) {
    e.preventDefault();

    pageDiv.appendChild(img1);
    pageDiv.appendChild(img2);
    pageDiv.appendChild(img3);
  }
}

export default JokePage;
