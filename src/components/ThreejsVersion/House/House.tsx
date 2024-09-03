import { Box, Cylinder } from '@react-three/drei'

const House = () => {
  return (
    <group>
      <Box args={[4, 2, 4]} position={[0, 1, 0]}>
        <meshStandardMaterial attach='material' color={'#D2B48C'} />
      </Box>
      <Cylinder args={[0.5, 0.5, 3, 8]} position={[-2, 0.5, 2]}>
        <meshStandardMaterial attach='material' color={'#8B4513'} />
      </Cylinder>
      <Cylinder args={[0.5, 0.5, 3, 8]} position={[2, 0.5, 2]}>
        <meshStandardMaterial attach='material' color={'#8B4513'} />
      </Cylinder>
      <Cylinder args={[0.5, 0.5, 3, 8]} position={[-2, 0.5, -2]}>
        <meshStandardMaterial attach='material' color={'#8B4513'} />
      </Cylinder>
      <Cylinder args={[0.5, 0.5, 3, 8]} position={[2, 0.5, -2]}>
        <meshStandardMaterial attach='material' color={'#8B4513'} />
      </Cylinder>
      <Box args={[1, 2, 0.1]} position={[0, 1, 2.01]}>
        <meshStandardMaterial attach='material' color={'#8B4513'} />
      </Box>
    </group>
  )
}

export default House
