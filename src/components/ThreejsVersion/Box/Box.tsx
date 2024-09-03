import { useBox } from '@react-three/cannon'

const Box = () => {
  const [ref]: any = useBox(() => ({ mass: 1, position: [0, 5, 0] }))
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='red' />
    </mesh>
  )
}

export default Box
