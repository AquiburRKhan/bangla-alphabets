import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { XR, XROrigin, createXRStore } from "@react-three/xr";

import { Canvas } from "@react-three/fiber";
import App from "./App.tsx";
import "./index.css";

const store = createXRStore();

const root = createRoot(document.querySelector("#root")!);

const handleEnterArClick = async () => {
  if (window.navigator.xr) {
    const isARSupported = await window.navigator.xr.isSessionSupported(
      "immersive-ar"
    );

    if (isARSupported) {
      store.enterAR();
    } else {
      window.alert(
        "AR not supported, try opening the page using a recent version of Chrome on Android."
      );
    }
  }
};

root.render(
  <StrictMode>
    <button
      style={{
        padding: "10px",
      }}
      onClick={handleEnterArClick}
    >
      Enter AR
    </button>
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [0, 0, 10],
      }}
    >
      <XR store={store}>
        <XROrigin position-y={6} position-z={30} />
        <App />
      </XR>
    </Canvas>
  </StrictMode>
);
