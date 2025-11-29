import React from "react";
import { motion } from "framer-motion";

const MicroservicesPage = () => {
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
          Microservicios
        </h1>

        <h2 style={{ color: "#d0d0d0", marginBottom: "25px" }}>
          Arquitectura de Microservicios
        </h2>

        <img
          src="/images/microservices-diagram.png"
          alt="Diagrama de Microservicios"
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "block",
            margin: "20px auto",
            borderRadius: "12px",
          }}
        />

        <p>
          La arquitectura de microservicios divide una aplicación en múltiples
          servicios pequeños, independientes y especializados. Cada
          microservicio se encarga de una parte muy concreta del sistema
          (usuarios, pagos, productos, notificaciones…), y todos se comunican
          entre sí a través de APIs.
        </p>

        <p>
          El objetivo principal es evitar las aplicaciones monolíticas
          gigantescas, para que cada parte pueda evolucionar, desplegarse y
          escalarse sin afectar al resto.
        </p>

        <h2 style={{ marginTop: "40px", color: "#f4b860" }}>
          Descripción general
        </h2>

        <p>
          Microservicios organiza una aplicación como un conjunto de módulos
          independientes. Cada uno tiene su propia lógica, base de datos y ciclo
          de vida. Esto permite escalar partes específicas del sistema, mejorar
          la resiliencia y desplegar nuevas versiones sin detener toda la
          plataforma.
        </p>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Tecnologías y frameworks habituales
        </h2>

        <h3 style={{ color: "#e6e6e6" }}>Backend</h3>
        <ul>
          <li>Node.js (Express, Fastify, NestJS)</li>
          <li>Spring Boot (Java)</li>
          <li>Go (Gin, Echo)</li>
          <li>Python (FastAPI, Flask)</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>
          Comunicación entre servicios
        </h3>
        <ul>
          <li>REST</li>
          <li>GraphQL</li>
          <li>gRPC</li>
          <li>Mensajería: Kafka, RabbitMQ, NATS</li>
        </ul>

        <h3 style={{ color: "#e6e6e6", marginTop: "15px" }}>
          Infraestructura y despliegue
        </h3>
        <ul>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>AWS Lambda, ECS, EKS</li>
          <li>Google Cloud Run</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Ventajas y desventajas
        </h2>

        <h3 style={{ color: "#7ed957" }}>Ventajas</h3>
        <ul>
          <li>Cada servicio es independiente</li>
          <li>Alta escalabilidad: solo escalas lo que hace falta</li>
          <li>Despliegues rápidos sin apagar todo el sistema</li>
          <li>Perfecto para equipos grandes y especializados</li>
          <li>Mejor tolerancia a fallos: si un servicio cae, el resto sigue</li>
        </ul>

        <h3 style={{ color: "#ff6f6f", marginTop: "15px" }}>Desventajas</h3>
        <ul>
          <li>Es más complejo de implementar que un monolito</li>
          <li>Requiere mucha infraestructura (Docker, Kubernetes...)</li>
          <li>La comunicación entre servicios añade latencia</li>
          <li>La observabilidad es más difícil: logs, métricas, tracing</li>
        </ul>

        <h2 style={{ marginTop: "35px", color: "#f4b860" }}>
          Casos de uso reales
        </h2>

        <p>
          Los microservicios se utilizan en aplicaciones a gran escala, donde el
          tráfico es muy alto o las funcionalidades cambian rápidamente:
        </p>

        <ul>
          <li>Netflix</li>
          <li>Amazon</li>
          <li>Uber</li>
          <li>Spotify</li>
          <li>Airbnb</li>
        </ul>

        <p>Ámbitos donde funciona bien:</p>
        <ul>
          <li>Web: ideal para plataformas grandes</li>
          <li>Móvil: APIs escalables y robustas</li>
          <li>Videojuegos: backends multijugador y servicios de matchmaking</li>
        </ul>

        <p style={{ marginTop: "35px" }}>
          Enlace de referencia:{" "}
          <a
            href="https://microservices.io/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#f4b860" }}
          >
            microservices.io – Martin Fowler
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default MicroservicesPage;
