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
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "3rem",
          color: "#ffffff",
          textShadow: "0 0 12px rgba(255,255,255,0.4)",
        }}
      >
        MVC (Modelo-Vista-Controlador)
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#1f1f1f",
          padding: "35px",
          borderRadius: "14px",
          boxShadow: "0 0 25px rgba(0,0,0,0.35)",
          border: "1px solid #2a2a2a",
        }}
      >
        <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginBottom: "20px" }}>
          MVC (Modelo-Vista-Controlador) es una forma de organizar un programa para que sea más fácil de crear y mantener. Se usa mucho en aplicaciones que tienen interfaz de usuario, como páginas web o apps.
        </p>

        <h2 style={{ color: "#E07A5F", marginBottom: "10px" }}>La idea principal:</h2>
        <ul style={{ lineHeight: "1.6", fontSize: "1.1rem", marginBottom: "20px" }}>
          <li><strong>Modelo:</strong> Maneja los datos y las reglas del programa (por ejemplo, guardar información en una base de datos).</li>
          <li><strong>Vista:</strong> Lo que el usuario ve en pantalla (como botones, listas, textos).</li>
          <li><strong>Controlador:</strong> Recibe lo que hace el usuario y decide qué hacer con los datos o qué mostrar en pantalla.</li>
        </ul>

        <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginBottom: "20px" }}>
          Separando estas partes, es más fácil trabajar en equipo y arreglar cosas sin romper otras partes del programa. Otros patrones de diseño, como MVVM, MVP o MVW, son variaciones de esta idea de separar los datos, la lógica y la vista para que todo sea más organizado.
        </p>

        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(224,122,95,0.5)" }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#800020",
            padding: "15px 20px",
            borderRadius: "12px",
            display: "inline-block",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() =>
            window.open("https://developer.mozilla.org/es/docs/Glossary/MVC", "_blank")
          }
        >
          Ir a documentación oficial de MVC
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MVCPage;
