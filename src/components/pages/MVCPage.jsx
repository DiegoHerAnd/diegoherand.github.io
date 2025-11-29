import React from "react";
import { motion } from "framer-motion";

const MVCPage = () => {
  return (
    <div
      style={{
        background: "#121212",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "#e6e6e6",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#1e1e1e",
          padding: "40px",
          borderRadius: "14px",
          boxShadow: "0 0 25px rgba(0,0,0,0.4)",
          border: "1px solid #2b2b2b",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            color: "#ffffff",
            marginBottom: "10px",
            textShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
        >
          MVC
        </h1>
        <h2 style={{ color: "#d0d0d0", marginBottom: "25px" }}>
          Model – View – Controller
        </h2>
        
        <img 
          src="/images/mvc-diagram.png" 
          alt="Diagrama MVC"
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "block",
            margin: "20px auto",
            borderRadius: "12px"
          }}
        />

        <p>
          MVC es una arquitectura de software que divide una aplicación en tres
          componentes principales: modelo, vista y controlador. Se utiliza en
          aplicaciones web, móviles y algunos sistemas interactivos para
          mantener el código organizado y facilitar su mantenimiento.
        </p>

        <p>Los componentes de MVC son los siguientes:</p>

        <ul style={{ lineHeight: "1.7", marginBottom: "20px" }}>
          <li>
            <b>Modelo:</b> gestiona los datos y la lógica de negocio.
          </li>
          <li>
            <b>Vista:</b> representa la interfaz con la que interactúa el
            usuario.
          </li>
          <li>
            <b>Controlador:</b> recibe entradas del usuario, coordina acciones y
            decide qué vista mostrar y qué actualizar en el modelo.
          </li>
        </ul>

        <p>
          Esta separación permite modificar la interfaz sin alterar la lógica,
          o actualizar el sistema de datos sin afectar directamente a la vista.
        </p>

        <h2 style={{ marginTop: "40px", color: "#f4b860" }}>
          Descripción general
        </h2>
        <p>
          MVC organiza una aplicación separando los datos (modelo), la
          presentación (vista) y la lógica de control (controlador). Esta
          estructura facilita el trabajo en equipo, la escalabilidad y la
          mantenibilidad del proyecto.
        </p>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Tecnologías y frameworks habituales
        </h2>

        <h3 style={{ color: "#e6e6e6" }}>Web</h3>
        <ul>
          <li>Ruby on Rails</li>
          <li>ASP.NET MVC</li>
          <li>Spring MVC (Java)</li>
          <li>Django (patrón MTV, equivalente)</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>Móvil</h3>
        <ul>
          <li>Aplicaciones iOS clásicas</li>
          <li>Arquitecturas tradicionales de Android</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>Videojuegos</h3>
        <ul>
          <li>Interfaces de usuario en Unity</li>
          <li>Menús y HUD en motores propios</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Ventajas y desventajas
        </h2>

        <h3 style={{ color: "#7ed957" }}>Ventajas</h3>
        <ul>
          <li>Estructura clara y ordenada</li>
          <li>Separación de responsabilidades</li>
          <li>Adecuado para equipos grandes</li>
          <li>Facilita el testing del modelo</li>
        </ul>

        <h3 style={{ color: "#ff6f6f", marginTop: "15px" }}>Desventajas</h3>
        <ul>
          <li>Estructura demasiado grande para proyectos pequeños</li>
          <li>El controlador puede crecer en exceso</li>
          <li>No es el patrón ideal para interfaces altamente reactivas</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Casos de uso reales
        </h2>

        <p>
          Es común en aplicaciones de gran tamaño como sistemas empresariales,
          plataformas educativas, tiendas online y herramientas internas.
        </p>

        <p>
          En videojuegos, se utiliza sobre todo para separar la lógica del juego
          de su interfaz (menús, HUD…).
        </p>

        <p>Ámbitos donde funciona bien:</p>
        <ul>
          <li>Web: muy adecuado</li>
          <li>Móvil: adecuado en algunos casos</li>
          <li>Videojuegos: adecuado para la interfaz</li>
        </ul>

        <p style={{ marginTop: "35px" }}>
          Enlace de referencia:{" "}
          <a
            href="https://developer.mozilla.org/es/docs/Glossary/MVC"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f4b860" }}
          >
            Documentación de MVC en MDN
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default MVCPage;
