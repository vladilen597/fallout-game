import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Physics } from '@react-three/cannon'
import Camera from './Camera/Camera.tsx'
import * as THREE from 'three'
import Box from './Box/Box.tsx'
import Terrain from './Terrain/Terrain.tsx'

const ThreejsVersion = () => {
  const [startPosition, setStartPosition] = useState([0, 0.5, 0])
  const [position, setPosition] = useState([0, 0.5, 0])
  const playerRef = useRef<THREE.Object3D>(null)

  useEffect(() => {
    if (!playerRef.current) return
    const { x, y, z } = playerRef.current.position
    setStartPosition([x, y, z])
  }, [position])

  return (
    <div className='three-js-game'>
      <Suspense fallback={null}>
        <Canvas
          style={{ height: '100vh', width: '100vw' }}
          camera={{
            position: [0, 7, 0],
            fov: 100,
            rotation: [Math.PI / 4, 0, 0],
          }}
          shadows
        >
          <Camera />
          <ambientLight intensity={1} color='#fff' castShadow />
          <directionalLight
            position={[1, 2, 0]}
            intensity={2}
            castShadow
            color='#ffd27f'
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Physics gravity={[0, -9.81, 0]} iterations={10}>
            {/* <Grid infiniteGrid /> */}
            {/* <PlayerIcon
              ref={playerRef}
              position={position}
              setPosition={setPosition}
              startPosition={startPosition}
              castShadow
              receiveShadow
            /> */}
            <Box />
            <Terrain />
          </Physics>

          <color attach='background' args={['#c6fcff']} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ThreejsVersion
