import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Sphere() {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const { mouse } = state
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3 + mouse.x * 0.3
      meshRef.current.rotation.x = mouse.y * 0.2
    }
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation)
    }
  })

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.85, 8]} />
        <meshStandardMaterial color="#1a0033" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh ref={wireRef} scale={1.005}>
        <icosahedronGeometry args={[0.85, 8]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.15} />
      </mesh>
    </>
  )
}

function Ring({ args, color, rotX, rotZ, speed }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.y = t * speed
      if (rotZ !== undefined) ref.current.rotation.x = rotX + Math.sin(t * .5) * .2
    }
  })
  return (
    <mesh ref={ref} rotation={[rotX || 0, 0, rotZ || 0]}>
      <torusGeometry args={args} />
      <meshBasicMaterial color={color} transparent opacity={0.65} />
    </mesh>
  )
}

function Orbs() {
  const group = useRef()
  const count = 8
  const orbs = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2
    const r = 1.6 + (i % 2) * 0.3
    return {
      x: Math.cos(angle) * r,
      y: (i % 3 - 1) * 0.5,
      z: Math.sin(angle) * r,
      phase: i * 0.8,
      color: i % 2 === 0 ? '#b347ea' : '#22d3ee',
      size: 0.035 + (i % 3) * 0.015,
    }
  })

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) group.current.rotation.y = t * 0.2 + state.mouse.x * 0.1
  })

  return (
    <group ref={group}>
      {orbs.map((o, i) => (
        <Float key={i} speed={1.5} floatIntensity={0.5} floatingRange={[-.2, .2]}>
          <mesh position={[o.x, o.y, o.z]}>
            <sphereGeometry args={[o.size, 12, 12]} />
            <meshBasicMaterial color={o.color} transparent opacity={0.85} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Stars() {
  const ref = useRef()
  const positions = new Float32Array(350 * 3)
  for (let i = 0; i < 350; i++) {
    positions[i * 3] = (Math.random() - .5) * 30
    positions[i * 3 + 1] = (Math.random() - .5) * 30
    positions[i * 3 + 2] = (Math.random() - .5) * 30 - 10
  }
  useFrame((state) => { if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02 })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.04} transparent opacity={0.6} />
    </points>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x += (state.mouse.x * 0.4 - state.camera.position.x) * 0.04
    state.camera.position.y += (state.mouse.y * 0.3 - state.camera.position.y) * 0.04
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 2, 2]} color="#7c3aed" intensity={4} distance={8} />
      <pointLight position={[-3, -2, 2]} color="#22d3ee" intensity={3} distance={8} />

      <Sphere />
      <Ring args={[1.3, 0.02, 16, 120]} color="#7c3aed" rotX={Math.PI / 3} speed={0.4} />
      <Ring args={[1.55, 0.015, 16, 120]} color="#22d3ee" rotX={Math.PI / 6} rotZ={Math.PI / 4} speed={-0.3} />
      <Orbs />
      <Stars />
      <CameraRig />
    </Canvas>
  )
}
