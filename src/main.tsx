import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Canvas } from "@react-three/fiber";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.querySelector("#root")!);

root.render(
  <StrictMode>
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [0, 0, 10],
      }}
    >
      <App />
    </Canvas>
  </StrictMode>
);
