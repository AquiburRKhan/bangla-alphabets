import { Text3D } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const textMaterial = new THREE.MeshBasicMaterial({
  color: "#fff",
});

const BanglaLetter = ({
  position,
  children,
}: {
  position: [number, number, number];
  children: React.ReactNode;
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <Text3D
      ref={ref}
      position={position}
      material={textMaterial}
      font="./fonts/Noto_Sans_Bengali_Condensed_SemiBold_Regular.json"
      size={0.75}
      height={0.05}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      {children}
    </Text3D>
  );
};

export default BanglaLetter;
