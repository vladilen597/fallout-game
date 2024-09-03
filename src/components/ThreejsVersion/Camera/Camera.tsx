import { OrbitControls } from '@react-three/drei'

const Camera = () => {
  return (
    <OrbitControls
      maxPolarAngle={1.5}
      minDistance={1}
      maxDistance={Math.PI * 2}
      // enablePan={false}
    />
  )
}

export default Camera
