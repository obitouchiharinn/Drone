"use client"

import { useEffect, useRef, useState } from "react"

// Inline SVG icons used for spectrum subitems (keeps no external dependency)
const RadioIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 12c0 5.523 4.477 10 10 10" stroke="#00aaff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12c0 3.314 2.686 6 6 6" stroke="#00aaff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2" fill="#00aaff" />
  </svg>
)

const MicrowaveIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="5" width="20" height="12" rx="2" stroke="#ff9900" strokeWidth="1.4" />
    <path d="M4 9h6v6H4z" fill="#ff9900" opacity="0.15" />
    <path d="M20 10v4" stroke="#ff9900" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const InfraredIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2c1.5 2 2 4 2 6 0 3-2 5-2 10" stroke="#ff4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 6c0 1.5 1 2 1 4" stroke="#ff4444" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M15 6c0 1.5-1 2-1 4" stroke="#ff4444" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const VisibleIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 5c5 0 9 4 9 7s-4 7-9 7-9-4-9-7 4-7 9-7z" stroke="#e5e7eb" strokeWidth="1.4" fill="none" />
    <circle cx="12" cy="12" r="2" fill="#e5e7eb" />
  </svg>
)

const UVIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2v4" stroke="#bb77ff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 18v4" stroke="#bb77ff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4.9 4.9l2.8 2.8" stroke="#bb77ff" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M16.3 16.3l2.8 2.8" stroke="#bb77ff" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" stroke="#bb77ff" strokeWidth="1.2" />
  </svg>
)
// Additional distinct icons for each spectrum point
const RadioAntennaIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 20v-6" stroke="#00aaff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8 16c1.5-3 4-5 8-6" stroke="#00aaff" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.8" fill="#00aaff" />
  </svg>
)

const SatelliteIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 21l6-6" stroke="#00aaff" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="12" y="4" width="8" height="6" rx="1" stroke="#00aaff" strokeWidth="1.4" />
    <path d="M14 6l6 6" stroke="#00aaff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const RadarIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="#ff9900" strokeWidth="1.4" />
    <path d="M12 12L20 6" stroke="#ff9900" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const CrosshairIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="#ff9900" strokeWidth="1.4" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#ff9900" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const ECMIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 12c3-4 8-6 13-5" stroke="#ff9900" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M3 16c3-2 8-3 13-1" stroke="#ff9900" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="#ff9900" strokeWidth="0.6" />
  </svg>
)

const ThermometerIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 14.76V6a2 2 0 10-4 0v8.76a3 3 0 104 0z" stroke="#ff4444" strokeWidth="1.4" fill="none" />
  </svg>
)

const FireIcon = ({ className = "" }: any) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2s4 3 4 7a4 4 0 11-8 0c0-4 4-7 4-7z" stroke="#ff4444" strokeWidth="1.4" fill="none" />
    <path d="M12 14v6" stroke="#ff4444" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)
import * as THREE from "three"
import gsap from "gsap"

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const [currentSection, setCurrentSection] = useState<"hero" | "jamming" | "detector" | "swarm" | "spectrum" | "false-navigation">("hero")
  const [currentSpectrumSection, setCurrentSpectrumSection] = useState<number>(0)
  // Track client/mobility to avoid SSR/CSR mismatches when checking window dimensions
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Run only on client to initialize responsive state
    setIsClient(true)
    const updateMob = () => setIsMobile(window.innerWidth <= 768)
    updateMob()
    window.addEventListener('resize', updateMob)
    return () => window.removeEventListener('resize', updateMob)
  }, [])

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    // Keep refs updated
    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    camera.position.set(0, 3, 10)
    camera.lookAt(0, 0, 0)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
    directionalLight.position.set(5, 10, 7.5)
    scene.add(directionalLight)

    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.4)
    fillLight.position.set(-5, -2, -5)
    scene.add(fillLight)

    // Stars
    const starsGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(2000 * 3)

    for (let i = 0; i < 2000 * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 100
      starPositions[i + 1] = (Math.random() - 0.5) * 100
      starPositions[i + 2] = (Math.random() - 0.5) * 100
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Main drone group
    const droneGroup = new THREE.Group()
    scene.add(droneGroup)

    const bodyGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.8)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      metalness: 0.7,
      roughness: 0.3,
    })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    droneGroup.add(body)

    const topCoverGeometry = new THREE.CylinderGeometry(0.35, 0.4, 0.1, 6)
    const topCoverMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xd4af37,
      emissiveIntensity: 0.1,
    })
    const topCover = new THREE.Mesh(topCoverGeometry, topCoverMaterial)
    topCover.position.y = 0.2
    droneGroup.add(topCover)

    const armLength = 1.2
    const armRadius = 0.08
    const arms: THREE.Mesh[] = []
    const motors: THREE.Mesh[] = []
    const propellers: THREE.Group[] = []

    const armPositions = [
      { x: 1, z: 1 },
      { x: -1, z: 1 },
      { x: -1, z: -1 },
      { x: 1, z: -1 },
    ]

    armPositions.forEach((pos, index) => {
      const angle = Math.atan2(pos.z, pos.x)
      const armGeometry = new THREE.CylinderGeometry(armRadius, armRadius * 0.6, armLength, 8)
      const armMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.6,
        roughness: 0.4,
      })
      const arm = new THREE.Mesh(armGeometry, armMaterial)

      arm.rotation.z = Math.PI / 2
      arm.rotation.y = angle
      arm.position.x = (pos.x * armLength) / 2
      arm.position.z = (pos.z * armLength) / 2
      droneGroup.add(arm)
      arms.push(arm)

      const stripeGeometry = new THREE.CylinderGeometry(armRadius + 0.01, armRadius * 0.6 + 0.01, armLength * 0.3, 8)
      const stripeMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.5,
        roughness: 0.5,
      })
      const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial)
      stripe.rotation.z = Math.PI / 2
      stripe.rotation.y = angle
      stripe.position.x = (pos.x * armLength) / 2
      stripe.position.z = (pos.z * armLength) / 2
      droneGroup.add(stripe)

      const motorGeometry = new THREE.CylinderGeometry(0.15, 0.18, 0.25, 16)
      const motorMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a2820,
        metalness: 0.5,
        roughness: 0.6,
      })
      const motor = new THREE.Mesh(motorGeometry, motorMaterial)
      motor.position.x = pos.x * armLength
      motor.position.y = 0.15
      motor.position.z = pos.z * armLength
      droneGroup.add(motor)
      motors.push(motor)

      const propellerGroup = new THREE.Group()
      const bladeGeometry = new THREE.BoxGeometry(0.6, 0.02, 0.1)
      const bladeMaterial = new THREE.MeshStandardMaterial({
        color: 0x808080,
        metalness: 0.4,
        roughness: 0.3,
        transparent: true,
        opacity: 0.9,
      })

      const blade1 = new THREE.Mesh(bladeGeometry, bladeMaterial)
      const blade2 = new THREE.Mesh(bladeGeometry, bladeMaterial.clone())
      blade2.rotation.y = Math.PI / 2

      propellerGroup.add(blade1)
      propellerGroup.add(blade2)
      propellerGroup.position.x = pos.x * armLength
      propellerGroup.position.y = 0.3
      propellerGroup.position.z = pos.z * armLength

      droneGroup.add(propellerGroup)
      propellers.push(propellerGroup)

      const ledGeometry = new THREE.SphereGeometry(0.05, 8, 8)
      const ledMaterial = new THREE.MeshStandardMaterial({
        color: index % 2 === 0 ? 0x0066ff : 0xff3300,
        emissive: index % 2 === 0 ? 0x0066ff : 0xff3300,
        emissiveIntensity: 1,
        metalness: 0,
        roughness: 0.2,
      })
      const led = new THREE.Mesh(ledGeometry, ledMaterial)
      led.position.x = pos.x * armLength
      led.position.y = 0
      led.position.z = pos.z * armLength
      droneGroup.add(led)
    })

    // Default placement/scale (will be adjusted for small screens)
    droneGroup.position.set(0, -5, 0)
    droneGroup.scale.set(2.8, 2.8, 2.8)

    // Adjust drone size/position for responsive layouts
    const updateForScreen = () => {
      const isMobile = window.innerWidth <= 768
      if (isMobile) {
        // smaller drone and slightly higher so it sits below the title
        droneGroup.scale.set(1.6, 1.6, 1.6)
        // ensure drone is exactly centered horizontally and bring it a bit higher
        droneGroup.position.set(0, -2.8, 0)
        // force camera to center on origin for mobile
        camera.position.set(0, 2.2, 9)
        camera.lookAt(0, 0, 0)
      } else {
        droneGroup.scale.set(2.8, 2.8, 2.8)
        // center drone for desktop
        droneGroup.position.set(0, -5, 0)
        camera.position.set(0, 3, 10)
        camera.lookAt(0, 0, 0)
      }
    }

    // Run once on init
    updateForScreen()

    let propellerSpeed = 0

    const blueWaves: THREE.Mesh[] = []
    const maxWaves = 5

    for (let i = 0; i < maxWaves; i++) {
      const waveGeometry = new THREE.RingGeometry(0.5, 0.6, 64)
      const waveMaterial = new THREE.MeshBasicMaterial({
        color: 0x00aaff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      })
      const wave = new THREE.Mesh(waveGeometry, waveMaterial)
      wave.rotation.x = -Math.PI / 2
      wave.visible = false
      droneGroup.add(wave)
      blueWaves.push(wave)
    }

    const redWaves: THREE.Mesh[] = []
    for (let i = 0; i < maxWaves; i++) {
      const waveGeometry = new THREE.RingGeometry(0.5, 0.6, 64)
      const waveMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0033,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      })
      const wave = new THREE.Mesh(waveGeometry, waveMaterial)
      wave.rotation.x = -Math.PI / 2
      wave.visible = false
      droneGroup.add(wave)
      redWaves.push(wave)
    }

    const detectionDots: THREE.Mesh[] = []
    const dotCount = 5
    const dotRadius = 4

    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2
      const dotGeometry = new THREE.SphereGeometry(0.15, 16, 16)
      const dotMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0033,
        emissive: 0xff0033,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0,
        metalness: 0,
        roughness: 0.2,
      })
      const dot = new THREE.Mesh(dotGeometry, dotMaterial)
      dot.position.x = Math.cos(angle) * dotRadius
      dot.position.z = Math.sin(angle) * dotRadius
      dot.position.y = 0
      dot.visible = false
      droneGroup.add(dot)
      detectionDots.push(dot)

      // Add expanding ring around each dot
      const ringGeometry = new THREE.RingGeometry(0.2, 0.25, 32)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0033,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = -Math.PI / 2
      ring.position.copy(dot.position)
      ring.visible = false
      droneGroup.add(ring)
      dot.userData.ring = ring
    }

    const reticleGroup = new THREE.Group()
    reticleGroup.visible = false
    droneGroup.add(reticleGroup)

    const reticleLayers = [
      { radius: 1.5, segments: 4, color: 0xff0033, opacity: 0.3, width: 0.08 },
      { radius: 2.2, segments: 8, color: 0xff0033, opacity: 0.4, width: 0.06 },
      { radius: 3, segments: 12, color: 0xff3366, opacity: 0.25, width: 0.05 },
    ]

    reticleLayers.forEach((layer) => {
      const ringGeometry = new THREE.RingGeometry(layer.radius, layer.radius + layer.width, layer.segments)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: layer.color,
        transparent: true,
        opacity: layer.opacity,
        side: THREE.DoubleSide,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = -Math.PI / 2
      reticleGroup.add(ring)
    })

    const crosshairLength = 4
    const crosshairWidth = 0.03
    const crosshairGeometry = new THREE.PlaneGeometry(crosshairLength, crosshairWidth)
    const crosshairMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0033,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    })

    const crosshairH = new THREE.Mesh(crosshairGeometry, crosshairMaterial)
    crosshairH.rotation.x = -Math.PI / 2
    reticleGroup.add(crosshairH)

    const crosshairV = new THREE.Mesh(crosshairGeometry, crosshairMaterial.clone())
    crosshairV.rotation.x = -Math.PI / 2
    crosshairV.rotation.z = Math.PI / 2
    reticleGroup.add(crosshairV)

    for (let i = 0; i < 360; i += 30) {
      const angle = (i * Math.PI) / 180
      const tickGeometry = new THREE.PlaneGeometry(0.15, 0.02)
      const tick = new THREE.Mesh(tickGeometry, crosshairMaterial.clone())
      tick.rotation.x = -Math.PI / 2
      tick.rotation.z = angle
      tick.position.x = Math.cos(angle) * 2.8
      tick.position.z = Math.sin(angle) * 2.8
      reticleGroup.add(tick)
    }

    const scanArcGeometry = new THREE.RingGeometry(2.5, 2.65, 32, 1, 0, Math.PI / 3)
    const scanArcMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6666,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    })
    const scanArc = new THREE.Mesh(scanArcGeometry, scanArcMaterial)
    scanArc.rotation.x = -Math.PI / 2
    reticleGroup.add(scanArc)

    gsap.to(reticleGroup.rotation, {
      y: Math.PI * 2,
      duration: 4,
      ease: "none",
      repeat: -1,
    })

    reticleLayers.forEach((layer, index) => {
      const ring = reticleGroup.children[index] as THREE.Mesh
      gsap.to(ring.rotation, {
        z: -Math.PI * 2,
        duration: 6 + index * 2,
        ease: "none",
        repeat: -1,
      })
      gsap.to(ring.material, {
        opacity: layer.opacity * 1.5,
        duration: 2 + index * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    })

    gsap.to(scanArc.rotation, {
      z: Math.PI * 2,
      duration: 3,
      ease: "none",
      repeat: -1,
    })

    const swarmDrones: THREE.Group[] = []
    const swarmCount = 12

    for (let i = 0; i < swarmCount; i++) {
      const smallDrone = new THREE.Group()

      // Small drone body
      const smallBodyGeometry = new THREE.BoxGeometry(0.35, 0.15, 0.35)
      const smallBodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.7,
        roughness: 0.3,
      })
      const smallBody = new THREE.Mesh(smallBodyGeometry, smallBodyMaterial)
      smallDrone.add(smallBody)

      // Small drone top hexagon
      const smallTopGeometry = new THREE.CylinderGeometry(0.16, 0.18, 0.05, 6)
      const smallTopMaterial = new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x0088ff,
        emissiveIntensity: 0.3,
      })
      const smallTop = new THREE.Mesh(smallTopGeometry, smallTopMaterial)
      smallTop.position.y = 0.08
      smallDrone.add(smallTop)

      // Small drone arms and propellers
      const smallArmLength = 0.5
      const smallArmPositions = [
        { x: 1, z: 1 },
        { x: -1, z: 1 },
        { x: -1, z: -1 },
        { x: 1, z: -1 },
      ]

      smallArmPositions.forEach((pos) => {
        const angle = Math.atan2(pos.z, pos.x)
        const smallArmGeometry = new THREE.CylinderGeometry(0.035, 0.025, smallArmLength, 6)
        const smallArmMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          metalness: 0.6,
          roughness: 0.4,
        })
        const smallArm = new THREE.Mesh(smallArmGeometry, smallArmMaterial)
        smallArm.rotation.z = Math.PI / 2
        smallArm.rotation.y = angle
        smallArm.position.x = (pos.x * smallArmLength) / 2
        smallArm.position.z = (pos.z * smallArmLength) / 2
        smallDrone.add(smallArm)

        // Small motor
        const smallMotorGeometry = new THREE.CylinderGeometry(0.07, 0.08, 0.1, 12)
        const smallMotorMaterial = new THREE.MeshStandardMaterial({
          color: 0x2a2a2a,
          metalness: 0.5,
          roughness: 0.6,
        })
        const smallMotor = new THREE.Mesh(smallMotorGeometry, smallMotorMaterial)
        smallMotor.position.x = pos.x * smallArmLength
        smallMotor.position.y = 0.06
        smallMotor.position.z = pos.z * smallArmLength
        smallDrone.add(smallMotor)

        // Small propeller
        const smallPropGroup = new THREE.Group()
        const smallBladeGeometry = new THREE.BoxGeometry(0.25, 0.015, 0.04)
        const smallBladeMaterial = new THREE.MeshStandardMaterial({
          color: 0x666666,
          metalness: 0.4,
          roughness: 0.3,
          transparent: true,
          opacity: 0.85,
        })

        const smallBlade1 = new THREE.Mesh(smallBladeGeometry, smallBladeMaterial)
        const smallBlade2 = new THREE.Mesh(smallBladeGeometry, smallBladeMaterial.clone())
        smallBlade2.rotation.y = Math.PI / 2

        smallPropGroup.add(smallBlade1)
        smallPropGroup.add(smallBlade2)
        smallPropGroup.position.x = pos.x * smallArmLength
        smallPropGroup.position.y = 0.11
        smallPropGroup.position.z = pos.z * smallArmLength

        smallDrone.add(smallPropGroup)
        smallDrone.userData.propellers = smallDrone.userData.propellers || []
        smallDrone.userData.propellers.push(smallPropGroup)
      })

      smallDrone.visible = false
      scene.add(smallDrone)
      swarmDrones.push(smallDrone)
    }

    const neuralLinks: THREE.Line[] = []

    for (let i = 0; i < swarmCount; i++) {
      for (let j = i + 1; j < swarmCount; j++) {
        const linkGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 0, 0),
        ])
        const linkMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffff,
          transparent: true,
          opacity: 0,
        })
        const link = new THREE.Line(linkGeometry, linkMaterial)
        scene.add(link)
        neuralLinks.push(link)
        link.userData = { from: i, to: j }
      }
    }

    const isMobile = window.innerWidth <= 768
    const timeline: any = (gsap as any).timeline ? (gsap as any).timeline() : gsap.timeline()

    // Propeller startup
    timeline.to(
      { value: 0 },
      {
        value: 0.5,
        duration: 0.5,
        onUpdate: function () {
          propellerSpeed = this.targets()[0].value
        },
      },
      0,
    )

      // Hero entrance animation (0-3s)
    timeline.to(
      droneGroup.position,
      {
        y: 0,
        duration: 3,
        ease: "power2.out",
        onUpdate: function () {
          const progress = this.progress()
          droneGroup.position.x = Math.sin(progress * Math.PI * 4) * 2
          droneGroup.rotation.z = Math.sin(progress * Math.PI * 4) * 0.15
          droneGroup.rotation.x = Math.cos(progress * Math.PI * 2) * 0.1
        },
      },
      0,
    )

    // Move to right side for hero section (3-4s)
    timeline.to(
      droneGroup.position,
      {
        x: isMobile ? 0 : 3.5,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      3,
    )

    timeline.to(
      droneGroup.rotation,
      {
        z: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      3,
    )

    // Wait 0 seconds before jamming section (4s)
    timeline.to({}, { duration: 0 }, 4)

    // Transition to jamming section (6-7s)
    timeline.to(
      droneGroup.position,
      {
        x: isMobile ? 0 : -3.5,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        onStart: () => {
          setCurrentSection("jamming")
        },
      },
      6,
    )
    // Jamming animations (7-8s) - shortened by 2s
    timeline.to(
      droneGroup.position,
      {
        y: 0.3,
        duration: 1,
        ease: "sine.inOut",
        repeat: 0,
        yoyo: false,
        onStart: () => {
          propellerSpeed = 1.2
        },
      },
      7,
    )

    timeline.to(
      droneGroup.rotation,
      {
        y: Math.PI * 2,
        duration: 1,
        ease: "none",
        onComplete: () => {
          triggerBlueWaves()
        },
      },
      7,
    )

    // Wait 0 seconds before detector section (10s)
    timeline.to({}, { duration: 0 }, 10)

    // Cinematic push-in to detector section (10-13s total)
    timeline.to(
      camera.position,
      {
        z: 5,
        y: 8,
        duration: 1,
        ease: "power3.inOut",
        onStart: () => {
          setCurrentSection("detector")
        },
      },
      10,
    )

    timeline.to(
      camera.rotation,
      {
        x: -Math.PI / 3,
        duration: 1,
        ease: "power3.inOut",
      },
      10,
    )

    timeline.to(
      droneGroup.position,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      10,
    )

    timeline.to(
      droneGroup.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          reticleGroup.visible = true
          triggerRedWaves()
        },
      },
      10,
    )

    // End detector: quickly hide reticle and dots and scale back by 13s
    timeline.to(
      droneGroup.position,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.2,
        ease: "power2.inOut",
        onStart: () => {
          reticleGroup.visible = false
          detectionDots.forEach((dot) => {
            dot.visible = false
            if (dot.userData.ring) {
              dot.userData.ring.visible = false
            }
            gsap.killTweensOf(dot.material)
            gsap.killTweensOf(dot.userData.ring?.material)
          })
        },
      },
      13,
    )

    timeline.to(
      droneGroup.scale,
      {
        x: 2.8,
        y: 2.8,
        z: 2.8,
        duration: 0.2,
        ease: "power2.inOut",
      },
      13,
    )

    timeline.add(() => {
      setCurrentSection("swarm")

      // Hide detection dots and remove any lingering red meshes for a clean swarm view
      try {
        detectionDots.forEach((dot) => {
          dot.visible = false
          if (dot.userData.ring) {
            dot.userData.ring.visible = false
          }
          try {
            gsap.killTweensOf(dot.material)
          } catch (e) {
            // ignore
          }
        })

        const redHexes = new Set([0xff0033, 0xff3366, 0xff6666, 0xff3300, 0xff0000])

        scene.children.slice().forEach((child: any) => {
          try {
            // Direct material color match
            if (child.material && child.material.color && redHexes.has(child.material.color.getHex())) {
              if (child.parent) child.parent.remove(child)
              return
            }

            // Traverse nested children to remove red-colored meshes
            if (child.traverse) {
              child.traverse((n: any) => {
                try {
                  if (n.material && n.material.color && redHexes.has(n.material.color.getHex())) {
                    if (n.parent) n.parent.remove(n)
                  }
                } catch (e) {
                  // ignore
                }
              })
            }
          } catch (e) {
            // ignore individual removal errors
          }
        })
      } catch (e) {
        // defensive
      }

      // Top-view camera for swarm section (faster)
      gsap.to(camera.position, {
        x: 0,
        y: 15,
        z: 5,
        duration: 0.5,
        ease: "power2.inOut",
      })
      
      gsap.to(camera.rotation, {
        x: -Math.PI / 2.5,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      
      // Center main drone (faster)
      gsap.to(droneGroup.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      
      // Blue pulse from main drone
      const pulseGeometry = new THREE.RingGeometry(0.5, 0.6, 64)
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: 0x00aaff,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      })
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
      pulse.rotation.x = -Math.PI / 2
      droneGroup.add(pulse)

      gsap.to(pulse.scale, {
        x: 20,
        y: 20,
        z: 20,
        duration: 0.6,
        ease: "power2.out",
      })

      gsap.to(pulse.material, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          droneGroup.remove(pulse)
        },
      })

      swarmDrones.forEach((drone, index) => {
        const angle = (index / swarmCount) * Math.PI * 2
        const radius = 15
        const startX = Math.cos(angle) * radius
        const startZ = Math.sin(angle) * radius
        const startY = (Math.random() - 0.5) * 8

        drone.position.set(startX, startY, startZ)
        drone.visible = true

        // Formation positions (hexagon)
        const formationAngle = (index / swarmCount) * Math.PI * 2
        const formationRadius = 8
        const targetX = Math.cos(formationAngle) * formationRadius
        const targetZ = Math.sin(formationAngle) * formationRadius
        const targetY = 0

        // Curved Bézier path animation (faster)
        gsap.to(drone.position, {
          x: targetX,
          y: targetY,
          z: targetZ,
          duration: 0.9,
          delay: index * 0.04,
          ease: "power2.inOut",
          onUpdate: function () {
            const progress = this.progress()
            const curveY = Math.sin(progress * Math.PI) * 3
            drone.position.y = gsap.utils.interpolate(startY, targetY, progress) + curveY
          },
          onComplete: () => {
            // Micro-adjustments for realistic swarm behavior
            gsap.to(drone.position, {
              y: "+=0.1",
              duration: 1 + Math.random(),
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            })

            // Rotate propellers
            if (drone.userData.propellers) {
              drone.userData.propellers.forEach((prop: THREE.Group) => {
                gsap.to(prop.rotation, {
                  y: Math.PI * 2,
                  duration: 0.1,
                  ease: "none",
                  repeat: -1,
                })
              })
            }
          },
        })

        // Look at center
        gsap.to(drone.rotation, {
          y: -formationAngle,
          duration: 0.9,
          delay: index * 0.04,
          ease: "power2.inOut",
        })
      })

      setTimeout(() => {
        neuralLinks.forEach((link) => {
          const fromDrone = swarmDrones[link.userData.from]
          const toDrone = swarmDrones[link.userData.to]

          const positions = link.geometry.attributes.position.array as Float32Array
          positions[0] = fromDrone.position.x
          positions[1] = fromDrone.position.y
          positions[2] = fromDrone.position.z
          positions[3] = toDrone.position.x
          positions[4] = toDrone.position.y
          positions[5] = toDrone.position.z
          link.geometry.attributes.position.needsUpdate = true

          gsap.to(link.material, {
            opacity: 0.3,
            duration: 0.5,
            ease: "power2.in",
          })

          // Pulsing effect
          gsap.to(link.material, {
            opacity: 0.6,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 0.5,
          })
        })
      }, 500)
    }, 13)

    // Blue ring pulses for the jamming section: scale + fade durations = 2s
    function triggerBlueWaves() {
      blueWaves.forEach((wave, index) => {
        gsap.delayedCall(index * 0.2, () => {
          wave.visible = true
          ;(wave.material as THREE.MeshBasicMaterial).opacity = 0.8

          gsap.to(wave.scale, {
            x: 8,
            y: 8,
            z: 8,
            duration: 2,
            ease: "power2.out",
          })

          gsap.to(wave.material as THREE.MeshBasicMaterial, {
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
              wave.visible = false
              wave.scale.set(1, 1, 1)
            },
          })
        })
      })
    }

    function triggerRedWaves() {
      redWaves.forEach((wave, index) => {
        gsap.delayedCall(index * 0.3, () => {
          wave.visible = true
          ;(wave.material as THREE.MeshBasicMaterial).opacity = 0.7

          gsap.to(wave.scale, {
            x: 12,
            y: 12,
            z: 12,
            duration: 2.5,
            ease: "power2.out",
          })

          gsap.to(wave.material as THREE.MeshBasicMaterial, {
            opacity: 0,
            duration: 2.5,
            ease: "power2.out",
            onComplete: () => {
              wave.visible = false
              wave.scale.set(1, 1, 1)

              if (index === 1) {
                showDetectionDots()
              }

              if (index === redWaves.length - 1) {
                setTimeout(() => triggerRedWaves(), 500)
              }
            },
          })
        })
      })
    }

    function showDetectionDots() {
      detectionDots.forEach((dot, index) => {
        gsap.delayedCall(index * 0.1, () => {
          dot.visible = true
          dot.userData.ring.visible = true

          gsap.to(dot.material, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          })

          // Pulsing effect
          gsap.to(dot.material, {
            opacity: 0.6,
            duration: 0.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          })

          gsap.to(dot.scale, {
            x: 1.3,
            y: 1.3,
            z: 1.3,
            duration: 0.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          })

          // Expanding ring
          gsap.to(dot.userData.ring.material, {
            opacity: 0.5,
            duration: 0.3,
            ease: "power2.out",
          })

          gsap.to(dot.userData.ring.scale, {
            x: 3,
            y: 3,
            z: 3,
            duration: 1.5,
            ease: "power2.out",
            repeat: -1,
            yoyo: false,
            onRepeat: () => {
              dot.userData.ring.scale.set(1, 1, 1)
            },
          })

          gsap.to(dot.userData.ring.material, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            repeat: -1,
            yoyo: false,
          })
        })
      })
    }

    // Animation loop
    let isMounted = true
    function animate() {
      if (!isMounted) return
      requestAnimationFrame(animate)

      try {
        propellers.forEach((propeller) => {
          propeller.rotation.y += propellerSpeed
        })

        // Update neural link positions
        neuralLinks.forEach((link) => {
          const fromDrone = swarmDrones[link.userData.from]
          const toDrone = swarmDrones[link.userData.to]

          if (fromDrone?.visible && toDrone?.visible) {
            const positions = link.geometry.attributes.position.array as Float32Array
            positions[0] = fromDrone.position.x
            positions[1] = fromDrone.position.y
            positions[2] = fromDrone.position.z
            positions[3] = toDrone.position.x
            positions[4] = toDrone.position.y
            positions[5] = toDrone.position.z
            link.geometry.attributes.position.needsUpdate = true
          }
        })

        stars.rotation.y += 0.0001

        renderer.render(scene, camera)
      } catch (e) {
        // Silently fail if rendering context is lost
        isMounted = false
      }
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      // Update responsive drone layout when screen size changes
      try {
        // updateForScreen is defined above and will adjust drone scale/position
        // Only call if available in closure
        // @ts-ignore
        if (typeof updateForScreen === "function") updateForScreen()
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener("resize", handleResize)

    timeline.to({}, { duration: 4 }, "+=0")

    timeline.to({}, { duration: 1.5 }, "+=0")

    timeline.add(() => {
      // Hide main drone and reticle
      reticleGroup.visible = false
      gsap.killTweensOf(reticleGroup.rotation)
      
      // Remove reticle group from scene and drone group
      scene.remove(reticleGroup)
      droneGroup.remove(reticleGroup)
      
      droneGroup.visible = false
      droneGroup.scale.set(0, 0, 0)
      
      gsap.to(droneGroup.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.8,
        ease: "power2.in",
      })

      gsap.to(droneGroup, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          droneGroup.visible = false
        },
      })

      // Hide swarm drones
      swarmDrones.forEach((drone) => {
        gsap.to(drone.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.8,
          ease: "power2.in",
        })
      })

      // Hide neural links
      neuralLinks.forEach((link) => {
        gsap.to(link.material, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        })
      })

      // Hide any blue waves or pulses
      blueWaves.forEach((wave) => {
        wave.visible = false
        gsap.killTweensOf(wave.scale)
        gsap.killTweensOf(wave.material)
        wave.scale.set(1, 1, 1)
      })

      // Hide swarm drones completely
      swarmDrones.forEach((drone) => {
        drone.visible = false
        gsap.killTweensOf(drone)
      })

      // Aggressively remove any lingering 3D objects except stars and lights
      try {
        if (scene && Array.isArray(scene.children)) {
          const keepTypes = new Set(["Light"])
          scene.children.slice().forEach((child: any) => {
            try {
              if (child === stars) return
              if (keepTypes.has(child.type)) return
              // remove any mesh/line/points/Group that might be leftover
              if (child.parent) child.parent.remove(child)
            } catch (e) {
              // ignore individual removal errors
            }
          })
        }
      } catch (e) {
        // defensive: if scene is somehow undefined or cleared, ignore
      }

      setCurrentSection("spectrum")

      // Set top-view camera for spectrum section
      gsap.to(camera.position, {
        x: 0,
        y: 15,
        z: 8,
        duration: 1.5,
        ease: "power2.inOut",
      })

      gsap.to(camera.rotation, {
        x: -Math.PI / 3.5,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: "power2.inOut",
      })

      // Update spectrum section text — cycle through Visible(3), Radio(0), Microwave(1), Ultraviolet(4)
      const _seq = [3, 0, 1, 4]
      let _si = 0
      setCurrentSpectrumSection(_seq[_si])
      const interval = setInterval(() => {
        _si = (_si + 1) % _seq.length
        setCurrentSpectrumSection(_seq[_si])
      }, 2000)

      // Stop the interval before FALSE NAVIGATION SIGNAL starts (at 25s)
      gsap.delayedCall(8, () => {
        clearInterval(interval)
      })

      return () => clearInterval(interval)
    }, 17)

    // Visible Light: display prism dispersion GIF (2s display)
    timeline.add(() => {
      // Create container for the GIF image
      const imageContainer = document.createElement('div')
      imageContainer.style.position = 'fixed'
      // Adjust placement: centered on mobile, nudged left+down on desktop
      const isMobilePrism = window.innerWidth <= 768
      if (isMobilePrism) {
        imageContainer.style.top = '55%'
        imageContainer.style.left = '50%'
        imageContainer.style.transform = 'translate(-50%, -50%)'
      } else {
        // Desktop: move prism to the right and slightly down from center
        imageContainer.style.top = '62%'
        imageContainer.style.left = '70%'
        // translate back so the image sits slightly right of center and a bit lower
        imageContainer.style.transform = 'translate(-50%, -35%)'
      }
      imageContainer.style.zIndex = '100'
      imageContainer.style.pointerEvents = 'none'
      
      const img = document.createElement('img')
      img.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Light_dispersion_conceptual_waves.gif'
      img.style.width = '500px'
      img.style.height = 'auto'
      img.style.maxWidth = '70vw'
      img.style.objectFit = 'contain'
      img.style.opacity = '0'
      
      imageContainer.appendChild(img)
      document.body.appendChild(imageContainer)
      
      // Fade in the image quickly
      gsap.to(img, { opacity: 1, duration: 0.25 })

      // Hold so total display ~2s then quick fade out
      gsap.delayedCall(1.75, () => {
        gsap.to(img, { 
          opacity: 0, 
          duration: 0.25,
          onComplete: () => {
            document.body.removeChild(imageContainer)
          }
        })
      })
    }, 17)

    // Radio waves (after Visible Light) - 2s display
    timeline.add(() => {
      const radioWaves: THREE.Mesh[] = []
      const waveCount = 20

      for (let i = 0; i < waveCount; i++) {
        const curvePoints = []
        const segments = 100
        const wavelength = 3
        const amplitude = 1.5

        for (let j = 0; j <= segments; j++) {
          const x = (j / segments) * 30 - 15
          const y = Math.sin((j / segments) * Math.PI * 2 * wavelength) * amplitude
          const z = -i * 2
          curvePoints.push(new THREE.Vector3(x, y, z))
        }

        const curve = new THREE.CatmullRomCurve3(curvePoints)
        const tubeGeometry = new THREE.TubeGeometry(curve, segments, 0.08, 8, false)
        const tubeMaterial = new THREE.MeshBasicMaterial({
          color: 0x0088ff,
          transparent: true,
          opacity: 0,
        })
        const wave = new THREE.Mesh(tubeGeometry, tubeMaterial)
        // Start below title and spread down to cover full page
        wave.position.set(-15, -1 - i * 1.2, 0)
        scene.add(wave)
        radioWaves.push(wave)

        // Fade in quickly
        gsap.to(tubeMaterial, {
          opacity: 0.7,
          duration: 0.25,
          delay: i * 0.02,
          ease: "power2.out",
        })

        // Propagate left -> right across entire screen (2s)
        gsap.to(wave.position, {
          x: 15,
          duration: 2,
          delay: i * 0.02,
          ease: "none",
        })

        // Fade out at end (~1.8s)
        gsap.to(tubeMaterial, {
          opacity: 0,
          duration: 0.25,
          delay: 1.8 + i * 0.02,
          ease: "power2.in",
          onComplete: () => {
            scene.remove(wave)
          },
        })
      }
    }, 19)

    timeline.add(() => {
      const microwaveWaves: THREE.Mesh[] = []
      const waveCount = 20

      for (let i = 0; i < waveCount; i++) {
        const curvePoints = []
        const segments = 80
        const wavelength = 6
        const amplitude = 1.2

        for (let j = 0; j <= segments; j++) {
          const x = (j / segments) * 30 - 15
          const y = Math.sin((j / segments) * Math.PI * 2 * wavelength) * amplitude
          const z = -i * 1.5
          curvePoints.push(new THREE.Vector3(x, y, z))
        }

        const curve = new THREE.CatmullRomCurve3(curvePoints)
        const tubeGeometry = new THREE.TubeGeometry(curve, segments, 0.06, 8, false)
        const tubeMaterial = new THREE.MeshBasicMaterial({
          color: 0xff6600,
          transparent: true,
          opacity: 0,
        })
        const wave = new THREE.Mesh(tubeGeometry, tubeMaterial)
        wave.position.set(0, 0, 0)
        scene.add(wave)
        microwaveWaves.push(wave)

        // Pulsed appearance (quick)
        gsap.to(tubeMaterial, {
          opacity: 0.8,
          duration: 0.25,
          delay: i * 0.08,
          ease: "power2.out",
        })

        // Fast propagation left to right (2s)
        gsap.to(wave.position, {
          x: 0,
          duration: 2,
          delay: i * 0.08,
          ease: "none",
        })

        // Pulse opacity - keep subtle but faster
        gsap.to(tubeMaterial, {
          opacity: 0.3,
          duration: 0.3,
          delay: i * 0.08 + 0.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })

        // Fade out
        gsap.to(tubeMaterial, {
          opacity: 0,
          duration: 0.25,
          delay: 1.7 + i * 0.08,
          ease: "power2.in",
          onComplete: () => {
            scene.remove(wave)
          },
        })
      }
    }, 21)

    timeline.add(() => {
      const uvRings: THREE.Mesh[] = []
      const ringCount = 6

      for (let i = 0; i < ringCount; i++) {
        const ringGeometry = new THREE.RingGeometry(0.5, 0.6, 64)
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xaa00ff,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
        })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)
        // start very small so it grows from inside -> outside
        ring.scale.set(0.01, 0.01, 0.01)
        // place differently on mobile: show from a top view so rings appear above
        const isMobileView = window.innerWidth <= 768
        if (isMobileView) {
          ring.position.set(0, 4 - i * 0.2, -2)
          // rotate to face the camera from above
          ring.rotation.x = -Math.PI / 2
        } else {
          ring.position.z = -5
        }
        scene.add(ring)
        uvRings.push(ring)

        // Sharp flash (staggered shorter)
        gsap.to(ringMaterial, {
          opacity: 0.9,
          duration: 0.08,
          delay: i * 0.15,
          ease: "power4.out",
        })

        // Quick expansion from small -> big (inside to outside)
        gsap.to(ring.scale, {
          x: 8,
          y: 8,
          duration: 0.5,
          delay: i * 0.15,
          ease: "power2.out",
        })

        // Move forward
        gsap.to(ring.position, {
          z: ring.position.z + 12,
          duration: 0.5,
          delay: i * 0.15,
          ease: "power2.out",
        })

        // Quick fade
        gsap.to(ringMaterial, {
          opacity: 0,
          duration: 0.3,
          delay: i * 0.15 + 0.4,
          ease: "power2.in",
          onComplete: () => {
            scene.remove(ring)
          },
        })
      }
    }, 23)

    // FALSE NAVIGATION SIGNAL (10-second 3-line animation)
    timeline.add(() => {
      setCurrentSection("false-navigation")

      // Static camera setup - looking at center
      camera.position.set(0, 0, 15)
      camera.lookAt(0, 0, 0)

      const pathSegments = 200
      const lineSpacing = 3 // Increased vertical spacing between the 3 lines
      const lines: Array<{
        mesh: THREE.Mesh
        material: THREE.Material
        isCorrect: boolean
        lineIdx: number
        baseY: number
        geometry: THREE.BufferGeometry
      }> = []
      const pathCurves: THREE.CatmullRomCurve3[] = []
      const pulseGroups: THREE.Group[] = []
      const destMarkers: Array<{ mesh: THREE.Mesh; material: THREE.Material; isCorrect: boolean }> = []
      const destLabels: Array<{ div: HTMLDivElement; dest: THREE.Mesh; camera: THREE.Camera }> = []

      // Create 3 navigation lines
      for (let lineIdx = 0; lineIdx < 3; lineIdx++) {
        const baseY = (lineIdx - 1) * lineSpacing // Top: 3, Middle: 0, Bottom: -3
        const pathPoints = []

        // Generate path points - initially all straight
        for (let i = 0; i <= pathSegments; i++) {
          const t = i / pathSegments
          const x = -10 + t * 20 // Left to right
          let y = baseY

          pathPoints.push(new THREE.Vector3(x, y, 0))
        }

        const pathCurve = new THREE.CatmullRomCurve3(pathPoints)
        pathCurves.push(pathCurve)

        // Create line geometry (straight at start)
        const lineTubeGeometry = new THREE.TubeGeometry(pathCurve, pathSegments, 0.08, 8, false)
        const lineMaterial = new THREE.MeshStandardMaterial({
          color: 0x00ff99, // Green/cyan
          transparent: true,
          opacity: 0,
          emissive: 0x00cc77,
          emissiveIntensity: 0.3,
          metalness: 0,
          roughness: 0.5,
        })
        const lineMesh = new THREE.Mesh(lineTubeGeometry, lineMaterial)
        scene.add(lineMesh)
        lines.push({ 
          mesh: lineMesh, 
          material: lineMaterial, 
          isCorrect: lineIdx === 1,
          lineIdx: lineIdx,
          baseY: baseY,
          geometry: lineTubeGeometry
        })

        // PHASE 1: Fade in all lines (0-4s)
        gsap.to(lineMaterial, {
          opacity: 0.7,
          duration: 4,
          ease: "power2.out",
        })

        // PHASE 3: Color shift for false lines (7-10s)
        // Top line (lineIdx=1, correct) stays green
        if (lineIdx !== 1) {
          gsap.to(lineMaterial, {
            color: 0xffdd88, // Pale yellow
            emissive: 0xffcc55,
            duration: 1.5,
            delay: 7,
            ease: "sine.inOut",
          })
        }

        // Create pulses traveling along each line
        const pulseCount = 6
        const pulseGroup = new THREE.Group()

        for (let i = 0; i < pulseCount; i++) {
          const pulseGeometry = new THREE.SphereGeometry(0.12, 16, 16)
          const pulseMaterial = new THREE.MeshStandardMaterial({
            color: 0x00ff99,
            transparent: true,
            opacity: 0.8,
            emissive: 0x00ff99,
            emissiveIntensity: 0.8,
            metalness: 0,
            roughness: 0.2,
          })
          const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
          pulseGroup.add(pulse)

          // Stagger pulses along line
          const startRatio = (i / pulseCount) * 0.2
          gsap.to({ progress: startRatio }, {
            progress: startRatio + 1.0,
            duration: 9.5,
            delay: 0.2,
            ease: "linear",
            onUpdate: function () {
              const currentProgress = (this.targets()[0].progress) % 1
              const point = pathCurves[lineIdx].getPoint(currentProgress)
              pulse.position.copy(point)
            },
          })

          // Color shift for pulses on false lines (7-10s)
          if (lineIdx !== 1) {
            gsap.to(pulseMaterial, {
              color: 0xffdd88,
              emissive: 0xffcc55,
              duration: 1.5,
              delay: 7,
              ease: "sine.inOut",
            })
          }
        }
        scene.add(pulseGroup)
        pulseGroups.push(pulseGroup)
      }

      // Destination markers with text labels (use same spacing as lines)
      const destData = [
        { x: 10, y: (0 - 1) * lineSpacing, color: 0xffdd88, label: "FALSE LOCATION", lineIdx: 0, isCorrect: false }, // Bottom (false)
        { x: 10, y: (1 - 1) * lineSpacing, color: 0x00ff99, label: "SAFE LOCATION", lineIdx: 1, isCorrect: true }, // Middle (safe/correct)
        { x: 10, y: (2 - 1) * lineSpacing, color: 0xffdd88, label: "FALSE LOCATION", lineIdx: 2, isCorrect: false }, // Top (false)
      ]

      for (let i = 0; i < destData.length; i++) {
        const data = destData[i]
        const destGeometry = new THREE.SphereGeometry(0.3, 16, 16)
        const destMaterial = new THREE.MeshStandardMaterial({
          color: data.color,
          transparent: true,
          opacity: 0,
          emissive: data.color,
          emissiveIntensity: 0.5,
          metalness: 0,
          roughness: 0.4,
        })
        const dest = new THREE.Mesh(destGeometry, destMaterial)
        // On small screens lift the marker slightly above the line so it appears 'above' the path
        const mobileMarkerOffset = window.innerWidth <= 768 ? 0.6 : 0
        dest.position.set(data.x, data.y + mobileMarkerOffset, 0)
        scene.add(dest)
        destMarkers.push({ mesh: dest, material: destMaterial, isCorrect: data.isCorrect })

        // Create text label
        const labelDiv = document.createElement('div')
        labelDiv.style.position = 'fixed'
        labelDiv.style.color = data.isCorrect ? '#00ff99' : '#ffdd88'
        labelDiv.style.fontSize = '14px'
        labelDiv.style.fontFamily = 'monospace'
        labelDiv.style.fontWeight = 'bold'
        labelDiv.style.textShadow = '0 0 10px ' + (data.isCorrect ? '#00ff99' : '#ffdd88')
        labelDiv.style.pointerEvents = 'none'
        labelDiv.style.zIndex = '40'
        labelDiv.style.whiteSpace = 'nowrap'
        labelDiv.textContent = data.label
        document.body.appendChild(labelDiv)
        destLabels.push({ div: labelDiv, dest: dest, camera: camera })

        // Update label position each frame
        const updateLabelPosition = () => {
          const vector = new THREE.Vector3()
          vector.copy(dest.position)
          vector.project(camera)
          const x = (vector.x * 0.5 + 0.5) * window.innerWidth
          const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight
          // Position label beside the projected point, with mobile-safe clamping
          let left = x + 20
          const isMobile = window.innerWidth <= 768
          if (isMobile) {
            // If the label would fall too far right on small screens, move it left of the point
            if (left > window.innerWidth * 0.7) {
              left = x - 120
            }
          }
          // Clamp within viewport (fallback width used if offsetWidth is 0)
          const labelWidth = labelDiv.offsetWidth || 120
          left = Math.max(8, Math.min(left, window.innerWidth - labelWidth - 8))
          labelDiv.style.left = left + 'px'
          labelDiv.style.top = Math.max(8, Math.min(y - 10, window.innerHeight - 24)) + 'px'
          labelDiv.style.opacity = String((destMaterial as any).opacity ?? 0)
        }

        if (data.isCorrect) {
          // Safe/correct location appears in PHASE 1 (0.5-4s)
          gsap.to(destMaterial, {
            opacity: 0.4,
            duration: 0.5,
            delay: 0.5,
            ease: "power2.out",
            onUpdate: updateLabelPosition,
          })
          // Stays visible through phase 2 and 3
          gsap.to(destMaterial, {
            opacity: 0.3,
            duration: 0,
            delay: 4,
            onUpdate: updateLabelPosition,
          })
          // Becomes subtle in phase 3
          gsap.to(destMaterial, {
            opacity: 0.15,
            duration: 1,
            delay: 7,
            ease: "sine.out",
            onUpdate: updateLabelPosition,
          })
        } else {
          // False locations appear at PHASE 2 start (4s)
          gsap.to(destMaterial, {
            opacity: 0.7,
            duration: 0.6,
            delay: 4,
            ease: "power2.out",
            onUpdate: updateLabelPosition,
          })
        }
      }

      // Animate line curves during PHASE 2 (4-7s)
      // Recreate geometries to show curves
      const curveAnimationTimeline = gsap.timeline({ delay: 4 })
      curveAnimationTimeline.to({ curveAmount: 0 }, {
        curveAmount: 1,
        duration: 3,
        ease: "sine.inOut",
        onUpdate: function () {
          const progress = this.targets()[0].curveAmount
          
          // Update bottom line (curves downward) - lineIdx 0, baseY = -lineSpacing
          const bottomPathPoints = []
          for (let i = 0; i <= pathSegments; i++) {
            const t = i / pathSegments
            const x = -10 + t * 20
            let y = (0 - 1) * lineSpacing // Keep base Y position (bottom)
            // Create parabola that only curves downward
            const parabola = t * (1 - t) * 4 // Max at t=0.5
            y -= progress * parabola * 1.2 // Only negative
            bottomPathPoints.push(new THREE.Vector3(x, y, 0))
          }
          const bottomCurve = new THREE.CatmullRomCurve3(bottomPathPoints)
          pathCurves[0] = bottomCurve
          
          // Update top line (curves upward) - lineIdx 2, baseY = lineSpacing
          const topPathPoints = []
          for (let i = 0; i <= pathSegments; i++) {
            const t = i / pathSegments
            const x = -10 + t * 20
            let y = (2 - 1) * lineSpacing // Keep base Y position (top)
            // Create parabola that only curves upward
            const parabola = t * (1 - t) * 4 // Max at t=0.5
            y += progress * parabola * 1.2 // Only positive
            topPathPoints.push(new THREE.Vector3(x, y, 0))
          }
          const topCurve = new THREE.CatmullRomCurve3(topPathPoints)
          pathCurves[2] = topCurve

          // Recreate geometries for curved lines
          lines[0].geometry.dispose()
          lines[0].geometry = new THREE.TubeGeometry(bottomCurve, pathSegments, 0.08, 8, false)
          lines[0].mesh.geometry = lines[0].geometry

          lines[2].geometry.dispose()
          lines[2].geometry = new THREE.TubeGeometry(topCurve, pathSegments, 0.08, 8, false)
          lines[2].mesh.geometry = lines[2].geometry
        }
      })

      // Cleanup after 10 seconds
      gsap.delayedCall(10, () => {
        lines.forEach(line => {
          gsap.to(line.material, { opacity: 0, duration: 0.5 })
        })
        pulseGroups.forEach(group => {
          group.children.forEach(pulse => {
            gsap.to((pulse as THREE.Mesh).material as any, { opacity: 0, duration: 0.5 })
          })
        })
        destMarkers.forEach(marker => {
          gsap.to(marker.material, { opacity: 0, duration: 0.5 })
        })

        gsap.delayedCall(0.5, () => {
          lines.forEach(line => {
            scene.remove(line.mesh)
            line.geometry.dispose()
          })
          pulseGroups.forEach(group => scene.remove(group))
          destMarkers.forEach(marker => scene.remove(marker.mesh))
          destLabels.forEach(label => {
            try {
              document.body.removeChild(label.div)
            } catch (e) {
              // Already removed
            }
          })
        })
      })


    }, 25)

    // Spectrum sections are controlled by the interval sequence (Radio, Microwave, Ultraviolet)

    return () => {
      isMounted = false
      window.removeEventListener("resize", handleResize)
      try {
        if (renderer && renderer.domElement && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement)
        }
      } catch (e) {
        // Silently fail if dom element already removed
      }
      timeline.kill()
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div ref={mountRef} className="fixed inset-0 w-full h-full z-0" />

      {currentSection === "hero" && (
        <div className="fixed top-3/5 -translate-y-1/2 left-8 md:left-16 lg:left-24 pointer-events-auto z-50 hero-text max-w-[90%] md:max-w-[45%]">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight tracking-tight whitespace-normal">
            PSYC Aerospace and Defence Industries Pvt Ltd
          </h1>
          <p className="text-xs md:text-lg lg:text-2xl text-blue-300 leading-relaxed">
            <span className="block md:inline whitespace-nowrap">AI-First payload systems | Computer vision</span>
            <span className="block md:inline whitespace-nowrap">Automation for next gen wars</span>
          </p>
        </div>
      )}

      {currentSection === "jamming" && (
        <div className="fixed top-1/2 -translate-y-1/2 right-8 md:right-16 lg:right-24 text-right pointer-events-auto z-50 jamming-text max-w-[45%]">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-blue-400 mb-2 md:mb-4 tracking-wider font-mono">
            JAMMING
          </h2>
          <p className="text-xs md:text-base lg:text-xl text-blue-300 tracking-widest font-mono">SIGNAL DISRUPTION</p>
        </div>
      )}

      {currentSection === "detector" && (
        <div className="fixed top-12 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 text-center pointer-events-auto z-50 detector-text max-w-[90%]">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-red-500 mb-2 md:mb-4 tracking-wider font-mono">
            DETECTOR
          </h2>
          <p className="text-xs md:text-base lg:text-xl text-red-400 tracking-widest font-mono">RADIO FREQUENCY</p>
        </div>
      )}

      {currentSection === "swarm" && (
        <div className="fixed top-12 md:top-20 lg:top-24 left-2/3 -translate-x-1/2 text-center pointer-events-auto z-50 swarm-text max-w-[60%]" style={{ transform: 'translate(calc(-50% + 10px), 0)' }}>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-cyan-400 mb-2 md:mb-4 tracking-wider font-mono">
            UAV SWARM TECHNOLOGY
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-cyan-300 tracking-widest font-mono">
            SWARM CONVERGENCE & INTELLIGENCE SYNC
          </p>
        </div>
      )}

      {currentSection === "spectrum" && (
        <>
          <div className="fixed top-8 md:top-12 left-1/2 -translate-x-1/2 text-center pointer-events-auto z-50 spectrum-main-title">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest font-mono">
              ELECTROMAGNETIC SPECTRUM
            </h1>
          </div>

          <div
            className={"fixed top-1/2 -translate-y-1/2 pointer-events-auto z-50 spectrum-section-text transition-all duration-1000 " + ([0,1,3,4].includes(currentSpectrumSection) ? "spectrum-visible" : "")}
            style={{
              left:
                currentSpectrumSection === 4
                  ? "calc(10% + 130px)"
                  : [0,1,3].includes(currentSpectrumSection)
                  ? "calc(10% + 40px)"
                  : currentSpectrumSection % 2 === 0
                  ? "calc(75%)"
                  : "calc(25%)",
              top: (typeof window !== 'undefined' && window.innerWidth <= 768 && currentSpectrumSection === 1)
                ? "calc(66% + 5px)"
                : currentSpectrumSection === 0
                ? "48%"
                : currentSpectrumSection === 1 || currentSpectrumSection === 4
                ? "48%"
                : currentSpectrumSection === 3
                ? "48%"
                : "70%",
              transform: "translate(calc(-50% + 25px), 0)",
            }}
          >
            {currentSpectrumSection === 0 && (
              <div className="text-left animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-2 font-mono">RADIO WAVES</h2>
                <p className="text-sm md:text-lg text-cyan-300 font-mono"><RadioAntennaIcon className="inline-block mr-3 align-middle" />Long-range communication</p>
                <p className="text-sm md:text-lg text-cyan-300 font-mono"><SatelliteIcon className="inline-block mr-3 align-middle" />Navigation • Surveillance</p>
              </div>
            )}
            {currentSpectrumSection === 1 && (
              <div className="text-left animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-2 font-mono">MICROWAVE</h2>
                <p className="text-sm md:text-lg text-orange-300 font-mono"><RadarIcon className="inline-block mr-3 align-middle" />Radar systems</p>
                <p className="text-sm md:text-lg text-orange-300 font-mono"><CrosshairIcon className="inline-block mr-3 align-middle" />Target detection</p>
                <p className="text-sm md:text-lg text-orange-300 font-mono"><ECMIcon className="inline-block mr-3 align-middle" />Electronic countermeasures</p>
              </div>
            )}
            {currentSpectrumSection === 2 && (
              <div className="text-left animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-red-400 mb-2 font-mono">INFRARED</h2>
                <p className="text-sm md:text-lg text-red-300 font-mono"><ThermometerIcon className="inline-block mr-3 align-middle" />Thermal sensing</p>
                <p className="text-sm md:text-lg text-red-300 font-mono"><FireIcon className="inline-block mr-3 align-middle" />Heat signatures</p>
              </div>
            )}
            {currentSpectrumSection === 3 && (
              <div className="text-left animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">VISIBLE LIGHT</h2>
                <p className="text-sm md:text-lg text-gray-300 font-mono"><VisibleIcon className="inline-block mr-3 align-middle" />Human perception spectrum</p>
              </div>
            )}
            {currentSpectrumSection === 4 && (
              <div className="text-left animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-purple-400 mb-2 font-mono opacity-80">
                  ULTRAVIOLET • X-RAY
                </h2>
                <p className="text-sm md:text-lg text-purple-300 font-mono opacity-80"><UVIcon className="inline-block mr-3 align-middle" />High-energy radiation</p>
              </div>
            )}
          </div>
        </>
      )}

      {currentSection === "false-navigation" && (
        <div className="fixed top-8 md:top-12 lg:top-16 left-1/2 -translate-x-1/2 text-center pointer-events-auto z-50 false-nav-text">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-3 tracking-wider font-mono">
            FALSE NAVIGATION SIGNAL
          </h2>
          <p className="text-sm md:text-lg text-yellow-300 tracking-widest font-mono">
            Deceptive guidance without disruption
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate(-50%, -40px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .hero-text {
          animation: fadeInLeft 1s ease-out 3.5s forwards;
          opacity: 0;
        }

        .jamming-text {
          animation: fadeInRight 0.8s ease-out 1.8s forwards;
          opacity: 0;
        }

        .detector-text {
          animation: fadeInDown 1s ease-out 2s forwards;
          opacity: 0;
        }

        .swarm-text {
          animation: fadeInDown 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }

        .false-nav-text {
          opacity: 1;
        }

        .spectrum-text {
          animation: fadeInDown 1s ease-out 0.5s forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          /* On mobile keep elements hidden initially so their CSS
             animations (with delays) can run without a flash-of-content. */
          .hero-text,
            .jamming-text,
            .detector-text,
            .swarm-text,
            .spectrum-text {
              opacity: 0;
            }

            /* Mobile layout: center title at top and keep drone below */
            .hero-text {
              left: 50% !important;
              transform: translate(-50%, 0) !important;
              top: 18% !important;
              max-width: 90% !important;
              text-align: center !important;
              padding: 0 1rem !important;
            }

            .hero-text h1 {
              font-size: 1.4rem !important;
              line-height: 1.05 !important;
              max-width: none !important;
              /* Allow title to wrap naturally on small screens */
              display: block !important;
              -webkit-line-clamp: unset !important;
              -webkit-box-orient: unset !important;
              overflow: visible !important;
              text-wrap: normal !important;
              word-break: keep-all !important;
            }
            /* Place jamming title above the drone on mobile */
            .jamming-text {
              left: 50% !important;
              right: auto !important;
              transform: translate(-50%, 0) !important;
              top: calc(40% - 10rem) !important;
              text-align: center !important;
              max-width: 90% !important;
            }
            /* Place detector title centered on mobile */
            .detector-text {
              position: fixed !important;
              left: 75% !important;
              right: auto !important;
              transform: translate(-50%+70px, 55px) !important;
              top: calc(40% - 10rem) !important;
              /* keep on the same mobile line */
              // top: calc(32% - 10rem) !important;
              text-align: center !important;
              max-width: 90% !important;
            }

            /* Ensure detector heading matches jamming size on mobile */
            .detector-text h2 {
              font-size: 2.25rem !important; /* matches tailwind text-4xl */
              line-height: 1.05 !important;
              text-align: center !important;
              max-width: 90% !important;
              display: block !important;
              margin: 0 auto !important;
            }
            /* Adjust Visible Light + related spectrum positions on mobile: move further up and a bit left */
            .spectrum-section-text.spectrum-visible {
              left: calc(44% - 11px) !important;
              top: calc(34% - 2.5rem) !important;
            }

            /* Reduce spectrum section heading sizes on mobile */
            .spectrum-section-text h2 {
              font-size: 1.25rem !important;
              line-height: 1.05 !important;
            }

            .spectrum-section-text p {
              font-size: 0.85rem !important;
            }
        }
      `}</style>
    </div>
  )
}
