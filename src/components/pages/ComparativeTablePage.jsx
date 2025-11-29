import React from "react";
import { motion } from "framer-motion";

const ComparativeTable = () => {
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
          maxWidth: "1000px",
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
            marginBottom: "20px",
            textShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
        >
          Comparativa de Arquitecturas
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #f4b860" }}>
              <th style={{ padding: "12px", textAlign: "left", color: "#f4b860" }}>Criterio</th>
              <th style={{ padding: "12px", textAlign: "left" }}>MVC</th>
              <th style={{ padding: "12px", textAlign: "left" }}>MVVM</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Microservicios</th>
              <th style={{ padding: "12px", textAlign: "left" }}>SPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Escalabilidad</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Media – adecuado para proyectos medianos/grandes</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alta – gracias a la separación View/ViewModel</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Muy alta – cada servicio se escala independientemente</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Media – depende del backend y optimización de datos</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Rendimiento</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Bueno en aplicaciones tradicionales</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Muy bueno con bindings reactivos</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Depende de la comunicación entre servicios</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Muy bueno en cliente, reduce recargas de página</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Complejidad</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Media – lógica centralizada en el controlador</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alta – requiere gestión de ViewModel y bindings</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alta – coordinación entre servicios y APIs</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Media – lógica de frontend concentrada, manejo de rutas y estado</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Coste de mantenimiento</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Moderado</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Bajo – fácil testear ViewModel y vista separadas</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alto – infraestructura compleja y despliegues múltiples</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Moderado – depende del framework y gestión de estado</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Adecuación a proyectos</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Web: buena, Móvil: limitada, Videojuegos: limitada</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Web: excelente, Móvil: buena, Videojuegos: limitada</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Web: excelente, Móvil: buena, Videojuegos: backend multijugador</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Web: excelente, Móvil: con frameworks híbridos, Videojuegos: menús web</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Facilidad para trabajar con APIs/Backend</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Moderada – integración backend desde el controlador</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alta – ViewModel centraliza la lógica de interacción con APIs</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alta – cada microservicio expone APIs independientes</td>
              <td style={{ padding: "12px", borderBottom: "1px solid #333" }}>Alta – SPA consume APIs constantemente desde el cliente</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default ComparativeTable;
