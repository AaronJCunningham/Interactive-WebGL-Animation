import React, { useState, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
};

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [2, 2, 2] : [3, 3, 3],
    color: hovered ? 'pink' : 'lightblue',
  });
  // useFrame(() => {

  // });

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
};

export default App;
