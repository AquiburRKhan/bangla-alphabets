import { Box, CameraControls, Cylinder, Text3D } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import BanglaLetter from "./BanglaLetter";
// import { useFrame } from "@react-three/fiber";
// import { setCanvasScene } from "../utils/downloadGLB";

const textMaterial = new THREE.MeshBasicMaterial({
  color: "#fff",
});

const blackboardWoodenBoardMaterial = new THREE.MeshBasicMaterial({
  color: "#5c3818",
  side: THREE.DoubleSide,
});

const blackboardMainBoardMaterial = new THREE.MeshBasicMaterial({
  color: "#056937",
  side: THREE.DoubleSide,
});

const dusterWoodenMaterial = new THREE.MeshBasicMaterial({
  color: "#b18007",
  side: THREE.DoubleSide,
});

const dusterMaterial = new THREE.MeshBasicMaterial({
  color: "#0c8a37",
  side: THREE.DoubleSide,
});

const marginLeft = 0.5;

const Blackboard = () => {
  const cameraControlsRef = useRef<CameraControls>(null!);
  const blackboardGroupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    // Get the size of the blackboard
    const blackboardGroupBeforeTranslationSize = new THREE.Box3();
    blackboardGroupBeforeTranslationSize.setFromObject(
      blackboardGroupRef.current
    );

    // Move blackboard to 0 point in y
    blackboardGroupRef.current.translateY(
      -blackboardGroupBeforeTranslationSize.min.y
    );

    // Re calculate size of the blackboard
    const blackboardGroupSize = new THREE.Box3();
    blackboardGroupSize.setFromObject(blackboardGroupRef.current);

    // Move camera to look at blackboard
    cameraControlsRef.current.setTarget(0, blackboardGroupSize.max.y / 2, 0);
    cameraControlsRef.current.setPosition(
      0,
      blackboardGroupSize.max.y / 2 + 2,
      14
    );
  }, []);

  // uncomment this to download the glb
  // useFrame((state) => {
  //   const scene = state.scene;
  //   setCanvasScene(scene);
  // });

  return (
    <>
      <CameraControls makeDefault ref={cameraControlsRef} />

      {/* Blackboard */}
      <group ref={blackboardGroupRef} rotation={[0, -(Math.PI / 2), 0]}>
        {/* Blackboard Wooden Boards */}
        {/* Top */}
        <Box
          position={[0, 6.05, 0]}
          args={[0.4, 0.1, 20]}
          material={blackboardWoodenBoardMaterial}
        ></Box>
        {/* Bottom */}
        <Box
          position={[0.81, -6.05, 0]}
          args={[2, 0.1, 20.2]}
          material={blackboardWoodenBoardMaterial}
        ></Box>
        {/* Left */}
        <Box
          position={[0, 0.05, 10]}
          args={[0.4, 12.1, 0.1]}
          material={blackboardWoodenBoardMaterial}
        ></Box>
        {/* Right */}
        <Box
          position={[0, 0.05, -10]}
          args={[0.4, 12.1, 0.1]}
          material={blackboardWoodenBoardMaterial}
        ></Box>

        {/* Blackboard Main Board */}
        <Box args={[0.2, 12, 20]} material={blackboardMainBoardMaterial}></Box>

        {/* Duster */}
        <group position={[1, -5.7, 7]} rotation={[0, -Math.PI / 18, 0]}>
          <Box args={[0.8, 0.5, 2]} material={dusterWoodenMaterial}></Box>
          <Box
            position={[0, 0.35, 0]}
            args={[0.8, 0.2, 2]}
            material={dusterMaterial}
          ></Box>
        </group>

        {/* Chalk */}
        <group position={[1, -5.9, -7]} rotation={[Math.PI / 2, 0, 0]}>
          <Cylinder
            rotation={[0, 0, -Math.PI / 4]}
            args={[0.1, 0.1, 0.8, 15]}
            material={textMaterial}
          ></Cylinder>
          <Cylinder
            position={[0, 0.6, 0]}
            rotation={[0, 0, -Math.PI / 6]}
            args={[0.1, 0.1, 0.8, 15]}
            material={textMaterial}
          ></Cylinder>
          <Cylinder
            position={[0, 1.3, 0]}
            rotation={[0, 0, Math.PI / 2]}
            args={[0.1, 0.1, 0.8, 15]}
            material={textMaterial}
          ></Cylinder>
        </group>
      </group>

      {/* 3D Texts */}
      {/* Title */}
      <Text3D
        position={[-9, 16, 0.2]}
        material={textMaterial}
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.05}
        letterSpacing={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Bangla Alphabets
      </Text3D>

      {/* Subtitle */}
      <Text3D
        position={[-9, 14.9, 0.2]}
        material={textMaterial}
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.05}
        letterSpacing={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Vowels
      </Text3D>

      <group position={[-9, 13.6, 0.2]}>
        <BanglaLetter position={[0, 0, 0]}>অ</BanglaLetter>
        <BanglaLetter position={[0.8 + marginLeft, 0, 0]}>আ</BanglaLetter>
        <BanglaLetter position={[2.4 + marginLeft, 0, 0]}>ই</BanglaLetter>
        <BanglaLetter position={[3.4 + marginLeft, 0, 0]}>ঈ</BanglaLetter>
        <BanglaLetter position={[4.5 + marginLeft, 0, 0]}>উ</BanglaLetter>
        <BanglaLetter position={[5.6 + marginLeft, 0, 0]}>ঊ</BanglaLetter>
        <BanglaLetter position={[6.8 + marginLeft, 0, 0]}>ঋ</BanglaLetter>
        <BanglaLetter position={[8 + marginLeft, 0, 0]}>এ</BanglaLetter>
        <BanglaLetter position={[9.1 + marginLeft, 0, 0]}>ঐ</BanglaLetter>
        <BanglaLetter position={[10.3 + marginLeft, 0, 0]}>ও</BanglaLetter>
        <BanglaLetter position={[11.4 + marginLeft, 0, 0]}>ঔ</BanglaLetter>
      </group>

      {/* Subtitle */}
      <Text3D
        position={[-9, 12.6, 0.2]}
        material={textMaterial}
        font="./fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.05}
        letterSpacing={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Consonants
      </Text3D>

      <group position={[-9, 11.2, 0.2]}>
        <BanglaLetter position={[0, 0, 0]}>ক</BanglaLetter>
        <BanglaLetter position={[0.7 + marginLeft, 0, 0]}>খ</BanglaLetter>
        <BanglaLetter position={[1.8 + marginLeft, 0, 0]}>গ</BanglaLetter>
        <BanglaLetter position={[2.9 + marginLeft, 0, 0]}>ঘ</BanglaLetter>
        <BanglaLetter position={[3.9 + marginLeft, 0, 0]}>ঙ</BanglaLetter>
        <BanglaLetter position={[5 + marginLeft, 0, 0]}>চ</BanglaLetter>
        <BanglaLetter position={[6 + marginLeft, 0, 0]}>ছ</BanglaLetter>
        <BanglaLetter position={[7.2 + marginLeft, 0, 0]}>জ</BanglaLetter>
        <BanglaLetter position={[8.6 + marginLeft, 0, 0]}>ঝ</BanglaLetter>
        <BanglaLetter position={[9.8 + marginLeft, 0, 0]}>ঞ</BanglaLetter>
      </group>

      <group position={[-9, 9.8, 0.2]}>
        <BanglaLetter position={[0, 0, 0]}>ট</BanglaLetter>
        <BanglaLetter position={[0.6 + marginLeft, 0, 0]}>ঠ</BanglaLetter>
        <BanglaLetter position={[1.7 + marginLeft, 0, 0]}>ড</BanglaLetter>
        <BanglaLetter position={[2.9 + marginLeft, 0, 0]}>ঢ</BanglaLetter>
        <BanglaLetter position={[4 + marginLeft, 0, 0]}>ণ</BanglaLetter>
        <BanglaLetter position={[5.1 + marginLeft, 0, 0]}>ত</BanglaLetter>
        <BanglaLetter position={[6.2 + marginLeft, 0, 0]}>থ</BanglaLetter>
        <BanglaLetter position={[7.3 + marginLeft, 0, 0]}>দ</BanglaLetter>
        <BanglaLetter position={[8.3 + marginLeft, 0, 0]}>ধ</BanglaLetter>
        <BanglaLetter position={[9.4 + marginLeft, 0, 0]}>ন</BanglaLetter>
      </group>

      <group position={[-9, 8.4, 0.2]}>
        <BanglaLetter position={[0, 0, 0]}>প</BanglaLetter>
        <BanglaLetter position={[0.6 + marginLeft, 0, 0]}>ফ</BanglaLetter>
        <BanglaLetter position={[1.7 + marginLeft, 0, 0]}>ব</BanglaLetter>
        <BanglaLetter position={[2.9 + marginLeft, 0, 0]}>ভ</BanglaLetter>
        <BanglaLetter position={[4 + marginLeft, 0, 0]}>ম</BanglaLetter>
        <BanglaLetter position={[5.1 + marginLeft, 0, 0]}>য</BanglaLetter>
        <BanglaLetter position={[6.2 + marginLeft, 0, 0]}>র</BanglaLetter>
        <BanglaLetter position={[7.3 + marginLeft, 0, 0]}>ল</BanglaLetter>
        <BanglaLetter position={[8.3 + marginLeft, 0, 0]}>ব</BanglaLetter>
        <BanglaLetter position={[9.4 + marginLeft, 0, 0]}>শ</BanglaLetter>
      </group>

      <group position={[-9, 7, 0.2]}>
        <BanglaLetter position={[0, 0, 0]}>ষ</BanglaLetter>
        <BanglaLetter position={[0.6 + marginLeft, 0, 0]}>স</BanglaLetter>
        <BanglaLetter position={[1.7 + marginLeft, 0, 0]}>হ</BanglaLetter>
        <BanglaLetter position={[2.7 + marginLeft, 0, 0]}>ড়</BanglaLetter>
        <BanglaLetter position={[3.8 + marginLeft, 0, 0]}>ঢ়</BanglaLetter>
        <BanglaLetter position={[4.8 + marginLeft, 0, 0]}>য়</BanglaLetter>
        <BanglaLetter position={[5.9 + marginLeft, 0, 0]}>ৎ</BanglaLetter>
        <BanglaLetter position={[6.9 + marginLeft, 0, 0]}>ং</BanglaLetter>
        <BanglaLetter position={[7.8 + marginLeft, 0, 0]}>ঃ</BanglaLetter>
        <BanglaLetter position={[9.1 + marginLeft, 0, 0]}>ঁ</BanglaLetter>
      </group>
    </>
  );
};

export default Blackboard;
