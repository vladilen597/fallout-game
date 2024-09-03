import { useRef, useEffect } from 'react'

import { SimplexNoise } from 'three-stdlib'

const Terrain = () => {
  const terrainRef = useRef<any>()

  useEffect(() => {
    if (!terrainRef.current) return
    const geometry = (terrainRef.current as any)?.geometry
    const noise = new SimplexNoise()
    const vertices = geometry.attributes.position.array

    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] =
        noise.noise(vertices[i] / 30, vertices[i + 1] / 30) * 0.5
    }

    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
  }, [])

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrainRef}
      receiveShadow
      castShadow
      onClick={() => console.log('hit')}
      onPointerMissed={() => console.log('miss')}
    >
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshStandardMaterial color='green' />
    </mesh>
  )
}

export default Terrain
