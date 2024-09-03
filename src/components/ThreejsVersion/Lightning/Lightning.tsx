import { useEffect } from 'react'
import { useThree } from 'react-three-fiber'
import { Lensflare, LensflareElement } from 'three-stdlib'
import * as THREE from 'three'

const Lightning = () => {
  const scene = useThree().scene

  useEffect(() => {
    const sunTexture = new THREE.TextureLoader().load('./images/lens-flare.png')
    const lensflare = new Lensflare()
    lensflare.addElement(new LensflareElement(sunTexture, 700, 0))

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(50, 100, 50)
    directionalLight.add(lensflare)

    scene.add(directionalLight)
  }, [])

  return
}

export default Lightning
