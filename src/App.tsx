import { Center } from "@react-three/drei";
import { XR, XROrigin, createXRStore } from "@react-three/xr";

import { Canvas } from "@react-three/fiber";
import Blackboard from "./components/Blackboard";
// import { handleDownloadClick } from "./utils/downloadGLB";

const store = createXRStore();

declare global {
  interface Window {
    MSStream: never;
  }
}

const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "";
};

const handleiOSAR = () => {
  const usdzFile = "/ar/bangla-alphabets.usdz"; // Replace with the actual path to the USDZ file
  const a = document.createElement("a");
  a.href = usdzFile;
  a.rel = "ar";
  a.appendChild(document.createTextNode("View in AR"));
  document.body.appendChild(a);
  a.click();
};

const handleAndroidAR = async () => {
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

const handleEnterArClick = async () => {
  const os = getMobileOperatingSystem();

  if (os === "iOS") {
    handleiOSAR();
  } else if (os === "Android") {
    handleAndroidAR();
  } else {
    window.alert("AR is not supported on your device");
  }
};

const App = () => {
  return (
    <>
      <button
        style={{
          padding: "10px",
        }}
        onClick={handleEnterArClick}
      >
        Enter AR
      </button>
      {/* <button
        style={{
          padding: "10px",
          marginLeft: "10px",
        }}
        onClick={handleDownloadClick}
      >
        Download
      </button> */}
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
          <Center>
            <Blackboard />
          </Center>
        </XR>
      </Canvas>
    </>
  );
};

export default App;
