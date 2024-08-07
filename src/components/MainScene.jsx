/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion-3d";
import {
  Box,
  Circle,
  Cone,
  Cylinder,
  Plane,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";
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

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[0, 1.6, 0]}
        castShadow
      >
        <axesHelper args={[5]} />
        <meshStandardMaterial color={0x00f0bb} />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-4, 1.6, 0]}
        castShadow
      >
        <meshLambertMaterial // 조명에 반응하는 재질
          color={0x0ab9ff}
          emissive={0xff0000} // material 내부에서 뿜어내는 빛(색깔)
          emissiveIntensity={0.3} // 발광 강도
        />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[4, 1.6, 0]}
        castShadow
      >
        <meshPhongMaterial
          color={0xff0000}
          emissive={0x00ff00} // 발광 색상
          emissiveIntensity={0.2} // 발광 강도
          specular={"white"} // 반사광의 색깔
          shininess={100} // 반사광 강도
        />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-8, 1.6, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={0xff00bb}
          metalness={0.9} // 금속성 (0~1)
          roughness={0.4} // 거칠기 (0~1)
        />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[8, 1.6, 0]}
        castShadow
      >
        <meshBasicMaterial color={"pink"} wireframe />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[0, 1.6, 4]}
        castShadow
      >
        <meshToonMaterial color={"red"} />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-4, 1.6, 4]}
        castShadow
      >
        <meshStandardMaterial
          color={"red"}
          emissive={"blue"}
          emissiveIntensity={12}
        />
      </TorusKnot>

      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[4, 1.6, 4]}
        castShadow
      >
        <meshPhysicalMaterial
          color={"red"}
          clearcoat={0.8}
          clearcoatRoughness={0.3}
          reflectivity={0.8}
          sheen={0x0000ff}
        />
      </TorusKnot>

      <TorusKnot args={[1, 0.2, 128, 128]} position={[-8, 1.6, 4]}>
        <meshNormalMaterial flatShading />{" "}
        {/** 법선 벡터를 색상으로 나타내는 재질 - 디버깅용 */}
      </TorusKnot>

      <TorusKnot args={[1, 0.2, 128, 128]} position={[8, 1.6, 4]}>
        <meshDepthMaterial color="white" />
      </TorusKnot>
    </motion.mesh>
  );
}
