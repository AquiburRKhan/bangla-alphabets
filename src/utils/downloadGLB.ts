import { GLTFExporter } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

export let canvasScene = new THREE.Scene();

export const setCanvasScene = (scene: THREE.Scene) => {
  canvasScene = scene;
};

const saveFile = (blob: Blob, filename: string) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveBufferArray = (buffer: any, filename: string) => {
  const blob = new Blob([buffer], { type: "application/octet-stream" });
  saveFile(blob, filename);
};

export const handleDownloadClick = () => {
  const exporter = new GLTFExporter();
  exporter.parse(
    canvasScene,
    (gltf) => {
      console.log(gltf);
      saveBufferArray(gltf, "bangla-alphabets.glb");
    },
    (e) => console.log(e),
    { binary: true }
  );
};
