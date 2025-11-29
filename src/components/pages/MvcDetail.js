import React from "react";

const MvcDetail = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>MVC</h1>
      <h2>(Model View Controller)</h2>
      <p>
        MVC (Modelo-Vista-Controlador) es una forma de organizar un programa para que sea más fácil de crear y mantener. Se usa mucho en aplicaciones que tienen interfaz de usuario, como páginas web o apps.
      </p>
      <p>
        La idea principal es separar las partes del programa para que cada una tenga su propio trabajo:
      </p>
      <ul>
        <li><b>Modelo:</b> maneja los datos y las reglas del programa (por ejemplo, guardar información en una base de datos).</li>
        <li><b>Vista:</b> es lo que el usuario ve en pantalla (como botones, listas, textos).</li>
        <li><b>Controlador:</b> recibe lo que hace el usuario (clics, formularios) y decide qué hacer con los datos o qué mostrar en la pantalla.</li>
      </ul>
      <p>
        Separando estas partes, es más fácil trabajar en equipo y arreglar cosas sin romper otras partes del programa.
      </p>
      <p>
        Otros patrones de diseño, como MVVM, MVP o MVW, son variaciones de esta idea de separar los datos, la lógica y la vista para que todo sea más organizado.
      </p>
      <p>
        Enlaces: <a href="https://developer.mozilla.org/es/docs/Glossary/MVC" target="_blank" rel="noreferrer">MVC - MDN</a>
      </p>
    </div>
  );
};

export default MvcDetail;
