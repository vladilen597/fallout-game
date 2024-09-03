import React from 'react'
import playerIcon from './images/head.png'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

const PlayerIcon = React.forwardRef(({ startPosition, position }: any, ref) => {
  // const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, playerIcon)

  const { x } = useSpring({
    from: { x: startPosition[0] },
    to: { x: position[0] },
  })

  // useFrame(() => {
  //   if (!ref.current) return
  //   const targetPositionZ = 0 // Replace 0 with the actual target position
  //   if (x.get() > ref.current.position.x) {
  //     ref.current.position.x += 0.001
  //   }
  //   if (targetPositionZ > ref.current.position.z) {
  //     ref.current.position.z += 0.001
  //   }
  // })

  return (
    <animated.mesh
      position={[x, 0.5, 0]}
      ref={ref as React.RefObject<THREE.Mesh>}
      castShadow
    >
      <boxGeometry attach='geometry' args={[0.5, 0.5, 0.1]} />
      <meshBasicMaterial
        attach='material'
        map={texture}
        side={THREE.FrontSide}
      />
    </animated.mesh>
  )
})

export default PlayerIcon
