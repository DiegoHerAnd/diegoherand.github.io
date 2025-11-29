import React from "react";
import { motion } from "framer-motion";

const SPAPage = () => {
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
          SPA
        </h1>

        <h2 style={{ color: "#d0d0d0", marginBottom: "25px" }}>
          Single Page Application
        </h2>

        <img
          src="/images/spa-diagram.png"
          alt="Diagrama SPA"
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "block",
            margin: "20px auto",
            borderRadius: "12px",
          }}
        />

        <p>
          Una SPA es una aplicación web que carga una única página HTML y actualiza
          su contenido dinámicamente sin recargar la página completa. Esto hace que
          la experiencia sea muy fluida, similar a una aplicación móvil.
        </p>

        <p>
          En lugar de pedir páginas completas al servidor, la SPA solicita datos
          mediante APIs y luego actualiza la interfaz desde el navegador usando
          JavaScript.
        </p>

        <h2 style={{ marginTop: "40px", color: "#f4b860" }}>
          Descripción general
        </h2>

        <p>
          La arquitectura SPA se basa en una única página que actúa como
          contenedor principal. Dentro de ella, un framework de frontend controla
          las vistas, rutas internas y actualizaciones en pantalla sin refrescar el
          navegador.
        </p>

        <p>
          Esto permite interfaces rápidas, transiciones suaves y una sensación
          parecida a una app nativa.
        </p>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Tecnologías y frameworks habituales
        </h2>

        <h3 style={{ color: "#e6e6e6" }}>Frontend</h3>
        <ul>
          <li>React</li>
          <li>Vue.js</li>
          <li>Angular</li>
          <li>Svelte</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>
          Enrutamiento dentro de la SPA
        </h3>
        <ul>
          <li>React Router</li>
          <li>Vue Router</li>
          <li>Angular Router</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>
          Consumo de APIs
        </h3>
        <ul>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>Firebase</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Ventajas y desventajas
        </h2>

        <h3 style={{ color: "#7ed957" }}>Ventajas</h3>
        <ul>
          <li>Interfaz muy rápida y fluida</li>
          <li>No hay recargas completas de página</li>
          <li>Experiencia más similar a una app móvil</li>
          <li>Mucha reutilización de componentes</li>
          <li>Ideal para dashboards e interfaces dinámicas</li>
        </ul>

        <h3 style={{ color: "#ff6f6f", marginTop: "15px" }}>Desventajas</h3>
        <ul>
          <li>SEO complicado si no se usa renderizado del servidor</li>
          <li>Mayor carga inicial de JavaScript</li>
          <li>Puede consumir más memoria del navegador</li>
          <li>La gestión del estado puede volverse compleja</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Casos de uso reales
        </h2>

        <p>
          Las SPAs se utilizan cuando la experiencia del usuario debe ser rápida,
          interactiva y continua, sin recargar la página. Son comunes en:
        </p>

        <ul>
          <li>Aplicaciones web modernas</li>
          <li>Dashboards y paneles de administración</li>
          <li>Redes sociales</li>
          <li>Aplicaciones móviles híbridas</li>
        </ul>

        <p>Ejemplos conocidos:</p>
        <ul>
          <li>Gmail</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Google Drive</li>
          <li>Notion</li>
        </ul>

        <p>Ámbitos donde funciona bien:</p>
        <ul>
          <li>Web: ideal</li>
          <li>Móvil: excelente si se usa con React Native o Ionic</li>
          <li>Videojuegos: útil para menús basados en web</li>
        </ul>

        <p style={{ marginTop: "35px" }}>
          Enlace de referencia:{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/SPA"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f4b860" }}
          >
            SPA en MDN
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SPAPage;
