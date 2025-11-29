import React from "react";
import { motion } from "framer-motion";

const MVVMPage = () => {
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
          MVVM
        </h1>

        <h2 style={{ color: "#d0d0d0", marginBottom: "25px" }}>
          Model – View – ViewModel
        </h2>

        <img
          src="/images/mvvm-diagram.png"
          alt="Diagrama MVVM"
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "block",
            margin: "20px auto",
            borderRadius: "12px",
          }}
        />

        <p>
          MVVM es una arquitectura que separa la lógica de negocio, la interfaz
          y el manejo del estado para crear aplicaciones más ordenadas y fáciles
          de mantener. Es muy usada en aplicaciones modernas, sobre todo en
          entornos donde la interfaz debe reaccionar a cambios de datos en tiempo
          real.
        </p>

        <p>
          El punto clave de MVVM es el ViewModel, que actúa como puente entre los
          datos y la vista, manteniendo el estado y la lógica sin que la interfaz
          tenga que hacer ese trabajo.
        </p>

        <h2 style={{ marginTop: "40px", color: "#f4b860" }}>
          Descripción general
        </h2>

        <p>
          MVVM divide la aplicación en tres capas:
        </p>

        <ul style={{ lineHeight: "1.7", marginBottom: "20px" }}>
          <li>
            <b>Modelo (Model):</b> gestiona los datos y las reglas de negocio.
          </li>
          <li>
            <b>Vista (View):</b> representa la interfaz visual.
          </li>
          <li>
            <b>ViewModel:</b> maneja la lógica, el estado y expone datos listos
            para que la vista los muestre.
          </li>
        </ul>

        <p>
          La vista observa automáticamente los cambios en el ViewModel, por lo
          que la interfaz se actualiza de forma reactiva y sin recargas.
        </p>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Tecnologías y frameworks habituales
        </h2>

        <h3 style={{ color: "#e6e6e6" }}>Web</h3>
        <ul>
          <li>React (con hooks y gestores de estado)</li>
          <li>Vue.js (MVVM nativo)</li>
          <li>Angular</li>
          <li>Svelte</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>Móvil</h3>
        <ul>
          <li>Android Jetpack (ViewModel + LiveData / Compose)</li>
          <li>SwiftUI (Apple)</li>
          <li>React Native</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>
          Videojuegos
        </h3>
        <ul>
          <li>Unity (UI + scripts con separación de lógica / vista)</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Ventajas y desventajas
        </h2>

        <h3 style={{ color: "#7ed957" }}>Ventajas</h3>
        <ul>
          <li>Interfaz reactiva y actualizada automáticamente</li>
          <li>Separación clara entre interfaz y lógica</li>
          <li>Ideal para aplicaciones dinámicas y grandes</li>
          <li>Facilita testing del ViewModel</li>
          <li>Muy adecuado para apps multiplataforma</li>
        </ul>

        <h3 style={{ color: "#ff6f6f", marginTop: "15px" }}>Desventajas</h3>
        <ul>
          <li>Puede ser complicado de entender al inicio</li>
          <li>Requiere gestionar correctamente el estado</li>
          <li>Puede generar estructuras demasiado grandes en proyectos pequeños</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Casos de uso reales
        </h2>

        <p>MVVM es ideal para proyectos modernos, dinámicos y con interfaces muy reactivas:</p>

        <ul>
          <li>Aplicaciones móviles (Android y iOS)</li>
          <li>Aplicaciones web SPA</li>
          <li>Dashboards en tiempo real</li>
          <li>Sistemas con mucho intercambio de datos con APIs</li>
        </ul>

        <p>Ejemplos donde se utiliza:</p>

        <ul>
          <li>Instagram</li>
          <li>Trello</li>
          <li>Google Photos</li>
          <li>Apps de banca móvil</li>
        </ul>

        <p style={{ marginTop: "35px" }}>
          Enlace de referencia:{" "}
          <a
            href="https://learn.microsoft.com/es-es/dotnet/architecture/mvvm/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f4b860" }}
          >
            MVVM — Microsoft Docs
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default MVVMPage;
