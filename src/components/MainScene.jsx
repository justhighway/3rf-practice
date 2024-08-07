/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion-3d";
import { Box, Circle, Cone, Cylinder, Plane, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function MainScene() {
  return (
    <motion.mesh
      initial={{ scale: 0.5, y: -60 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <Plane
        args={[40, 40]}
        rotation-x={-Math.PI / 2}
        material-side={THREE.DoubleSide}
        receiveShadow
      >
        <meshStandardMaterial />
      </Plane>

      <Box args={[2, 2, 2]} position-y={1} castShadow receiveShadow>
        <meshStandardMaterial color="orange" />
        <axesHelper args={[5]} />
      </Box>

      <Sphere args={[1]} position={[0, 1, 4]} castShadow receiveShadow>
        <meshStandardMaterial color="yellow" />
      </Sphere>

      <Circle
        args={[1]}
        position={[0, 1, -4]}
        material-color={"violet"}
        material-side={THREE.DoubleSide}
      ></Circle>

      <Cone args={[1, 3]} position={[3, 1, 0]} castShadow>
        <meshStandardMaterial color={"brown"} />
      </Cone>

      <Cylinder args={[2, 1, 2]} position={[-3, 1, 2]} castShadow>
        <meshStandardMaterial color={"pink"} />
      </Cylinder>
    </motion.mesh>
  );
}
