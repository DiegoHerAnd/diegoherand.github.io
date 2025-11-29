import React from "react";
import { motion } from "framer-motion";
import { arquitecturas } from "./components/data";
import { useNavigate } from "react-router-dom";

// Paleta de colores cálidos para cada bloque (5 bloques)
const blockColors = [
  "#8B2635", // MVVM
  "#E07A5F", // MVC
  "#C97B63", // Microservicios
  "#A27B5C", // SPA
  "#6F5E53"  // Tabla comparativa
];

// Variants del contenedor para animación secuencial
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Variants de cada bloque
const itemVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 50,
    x: index % 2 === 0 ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

const MinimalDynamicBlocks = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#121212",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "#e6e6e6",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "2.8rem",
          color: "#ffffff",
          textShadow: "0 0 12px rgba(255,255,255,0.4)",
        }}
      >
        Expositor de Arquitecturas
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {arquitecturas.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              background:
                "linear-gradient(135deg, #E07A5F, #F4B860)",
              boxShadow: "0 0 35px rgba(244,184,96,0.5)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            style={{
              background: `linear-gradient(135deg, ${blockColors[index % blockColors.length]}, #2a2a2a)`,
              padding: "35px",
              borderRadius: "14px",
              boxShadow: "0 0 20px rgba(0,0,0,0.35)",
              border: "1px solid #2a2a2a",
              color: "#E6E6E6",
              cursor: "pointer",
              transition: "background 0.5s ease",
            }}
            onClick={() => {
              switch (item.title) {
                case "MVVM":
                  navigate("/mvvm");
                  break;
                case "MVC":
                  navigate("/mvc");
                  break;
                case "Microservicios":
                  navigate("/microservicios");
                  break;
                case "SPA":
                  navigate("/spa");
                  break;
                case "Comparativa":
                  navigate("/comparativa");
                  break;
                default:
                  break;
              }
            }}

          >
            <h2
              style={{
                marginBottom: "12px",
                fontSize: "1.9rem",
                color: "#ffffff",
                transition: "text-shadow 0.3s ease",
              }}
            >
              {item.title}
            </h2>

            {item.subtitle && (
              <h3 style={{ color: "#e0e0e0", marginBottom: "10px" }}>
                {item.subtitle}
              </h3>
            )}

            <p
              style={{
                lineHeight: "1.6",
                fontSize: "1.1rem",
                color: "#f0f0f0",
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MinimalDynamicBlocks;
