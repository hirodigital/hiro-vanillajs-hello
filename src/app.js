/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let subject = ["Mi mamá", "Mi hijo", "Mi vecina", "Mi esposo"];
  let action = ["vió", "limpió", "comió", "paseó", "soltó"];
  let objects = ["un ovni", "una fruta", "un gato", "una rata"];
  let where = ["en el baño", "en la playa", "en la plaza", "en la montaña"];

  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let objIndx = Math.floor(Math.random() * objects.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    objects[objIndx] +
    " " +
    where[wheIndx]
  );
};
