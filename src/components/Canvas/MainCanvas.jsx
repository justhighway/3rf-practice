/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import MainScene from "../MainScene";
import ResponsiveCanvas from "./ResponsiveCanvas";
import { OrbitControls, Sky } from "@react-three/drei";

const MainCanvas = () => {
  return (
    // 전체 화면 크기에 맞게 캔버스를 설정하기 위해 div 요소를 사용
    <div className="w-screen h-screen">
      {/* Canvas 컴포넌트를 사용하여 3D 씬을 렌더링
        gl 속성: 안티앨리어싱(antialias)을 true로 설정하여 렌더링 품질을 향상시킴
        camera 속성: 카메라의 시야각(fov), 근거리 클리핑(near), 원거리 클리핑(far), 초기 위치(position)를 설정 */}
      <Canvas
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [7, 7, 7],
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight
          castShadow
          args={[0xffffff, 5]}
          position={[5, 3, 0]}
          shadow-camera-left={-25}
          shadow-camera-right={25}
          shadow-camera-top={25}
          shadow-camera-bottom={-25}
          shadow-camera-near={0.1}
          shadow-camera-far={1000}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
        />
        {/* ResponsiveCanvas 컴포넌트를 포함하여 창 크기 변경에 반응하는 캔버스를 구현 */}
        <ResponsiveCanvas />
        {/* MainScene 컴포넌트를 렌더링하여 3D 씬의 메인 콘텐츠를 표시 */}
        <MainScene />
        <Sky />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
