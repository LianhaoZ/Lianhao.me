import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Effects } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import { FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader, GlitchPass, RenderPixelatedPass } from 'three-stdlib'
extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass, GlitchPass })

function Postpro() {
  const water = useRef()
  // const data = useLoader(LUTCubeLoader, '/cubicle.CUBE')
  useFrame((state) => (water.current.time = state.clock.elapsedTime * 0.5))
  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={1} />
      <unrealBloomPass args={[undefined, 1.25, 1, 0]} />
      <filmPass args={[0.2, 0.5, 1500, false]} />
      {/* <lUTPass lut={data.texture} intensity={0.75} /> */}
      {/* <glitchPass />   */}
    </Effects>
  )
}

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <>
      <mesh>
        <group rotation={[0, 0, Math.PI / 4]}>
          <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial
              transparent
              color='#f272c8'
              size={0.003}
              sizeAttenuation={true}
              depthWrite={false}
            />
          </Points>
          {/* <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial
              transparent
              color='#5e0808'
              size={0.006}
              sizeAttenuation={true}
              depthWrite={false}
            /> 
          </Points> */}
        </group>
        {/* <group rotation={[0, 0, Math.PI / 2]}>
          <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial
              transparent
              color='#4c00a4'
              size={0.004}
              sizeAttenuation={true}
              depthWrite={false}
            />
          </Points>
        </group> */}
        {/* <group rotation={[0, 0, Math.PI/2.5]}>
          <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial
              transparent
              color='#629201'
              size={0.004}
              sizeAttenuation={true}
              depthWrite={false}
            />
          </Points>
        </group> */}
      </mesh>
      <mesh>
      <group rotation={[0, 0, Math.PI / 2]}>
          <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial
              transparent
              color='#4c00a4'
              size={0.004}
              sizeAttenuation={true}
              depthWrite={false}
            />
          </Points>
        </group>
      </mesh>
    </>
  )

}

const StarsCanvas = () => {
  return (
    <div
      className="w-full h-auto absolute inset-0 z-[-1] opacity-80 blur-sm"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Postpro />
        </Suspense>

        <Preload all />
      </Canvas> 
    </div>
  )
}

export default StarsCanvas;

