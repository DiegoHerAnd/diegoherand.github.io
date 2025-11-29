import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MinimalDynamicBlocks from "./MinimalDynamicBlocks";
import MVCPage from "./components/pages/MVCPage";
import MicroservicesPage from "./components/pages/MicroservicesPage";
import SPAPage from "./components/pages/SPAPage";
import MVVMPage from "./components/pages/MVVMPage";
import ComparativeTablePage from "./components/pages/ComparativeTablePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MinimalDynamicBlocks />} />
        <Route path="/mvc" element={<MVCPage />} />
        <Route path="/microservicios" element={<MicroservicesPage />} />
        <Route path="/spa" element={<SPAPage />} />
        <Route path="/mvvm" element={<MVVMPage />} />
        <Route path="/comparativa" element={<ComparativeTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
