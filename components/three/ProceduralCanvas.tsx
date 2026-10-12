'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface ProceduralCanvasProps {
  className?: string
}

export default function ProceduralCanvas({ className }: ProceduralCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isSupported, setIsSupported] = useState(true)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Verify WebGL support
    try {
      const testCanvas = document.createElement('canvas')
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')
      if (!gl) {
        setIsSupported(false)
        return
      }
    } catch {
      setIsSupported(false)
      return
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Dimensions
    let width = container.clientWidth || 400
    let height = container.clientHeight || 400

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 7.5)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Main Sculpture Group
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // 1. Outer Refractive Glass Prism (Beveled Octahedron)
    const glassGeo = new THREE.OctahedronGeometry(1.6, 2)
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      metalness: 0.05,
      ior: 1.54,
      thickness: 2.2,
      attenuationColor: new THREE.Color(0x38bdf8),
      attenuationDistance: 2.0,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
    })
    const glassMesh = new THREE.Mesh(glassGeo, glassMat)
    mainGroup.add(glassMesh)

    // 2. Inner Titanium Obsidian Core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0)
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.18,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    mainGroup.add(coreMesh)

    // 3. Delicate Architectural Outer Halo (Titanium hairline ring)
    const halo1Geo = new THREE.TorusGeometry(2.35, 0.015, 16, 128)
    const halo1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.95,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
    })
    const halo1 = new THREE.Mesh(halo1Geo, halo1Mat)
    halo1.rotation.x = Math.PI / 3.2
    halo1.rotation.y = Math.PI / 8
    mainGroup.add(halo1)

    // 4. Secondary Counter-Angle Floating Halo
    const halo2Geo = new THREE.TorusGeometry(2.65, 0.012, 16, 128)
    const halo2Mat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      metalness: 0.95,
      roughness: 0.25,
      emissive: 0x4338ca,
      emissiveIntensity: 0.3,
    })
    const halo2 = new THREE.Mesh(halo2Geo, halo2Mat)
    halo2.rotation.x = -Math.PI / 4.5
    halo2.rotation.z = Math.PI / 6
    mainGroup.add(halo2)

    // 5. Minimalist Micro-Dust Particles
    const particleCount = 80
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8
      particlePositions[i + 1] = (Math.random() - 0.5) * 8
      particlePositions[i + 2] = (Math.random() - 0.5) * 6
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.5)
    keyLight.position.set(5, 6, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x818cf8, 2.0)
    fillLight.position.set(-5, -4, -3)
    scene.add(fillLight)

    const topSpot = new THREE.PointLight(0xffffff, 3.0, 10)
    topSpot.position.set(0, 4, 2)
    scene.add(topSpot)

    // Interactive Drag Physics & Pointer Parallax
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let angularVelX = 0
    let angularVelY = 0
    const hoverOffset = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      prevMouseX = clientX
      prevMouseY = clientY
      angularVelX = 0
      angularVelY = 0
    }

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

      if (isDragging) {
        const deltaX = clientX - prevMouseX
        const deltaY = clientY - prevMouseY
        angularVelY = deltaX * 0.006
        angularVelX = deltaY * 0.006
        prevMouseX = clientX
        prevMouseY = clientY
      } else {
        const rect = container.getBoundingClientRect()
        const x = ((clientX - rect.left) / rect.width) * 2 - 1
        const y = -(((clientY - rect.top) / rect.height) * 2 - 1)
        hoverOffset.targetX = Math.max(-1, Math.min(1, x)) * 0.35
        hoverOffset.targetY = Math.max(-1, Math.min(1, y)) * 0.3
      }
    }

    const onPointerUp = () => {
      isDragging = false
    }

    container.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('mouseup', onPointerUp)

    container.addEventListener('touchstart', onPointerDown, { passive: true })
    window.addEventListener('touchmove', onPointerMove, { passive: true })
    window.addEventListener('touchend', onPointerUp)

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Visibility Caching
    let isVisible = true
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(container)

    // Animation Loop
    let animationFrameId: number
    let lastTime = performance.now()
    const startTime = lastTime

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isVisible) return

      const delta = Math.min(Math.max((currentTime - lastTime) / 1000, 0), 0.1)
      lastTime = currentTime
      const elapsedTime = (currentTime - startTime) / 1000

      const speedFactor = prefersReducedMotion ? 0.15 : 1.0

      // Natural drag inertia damping
      if (isDragging) {
        mainGroup.rotation.y += angularVelY
        mainGroup.rotation.x += angularVelX
      } else {
        // Apply smooth deceleration
        angularVelX *= 0.94
        angularVelY *= 0.94
        mainGroup.rotation.y += angularVelY
        mainGroup.rotation.x += angularVelX

        // Subtle ambient oscillation
        mainGroup.rotation.y += 0.25 * delta * speedFactor
        mainGroup.position.y = Math.sin(elapsedTime * 0.9) * 0.12
      }

      // Parallax lerp
      hoverOffset.x += (hoverOffset.targetX - hoverOffset.x) * 0.05
      hoverOffset.y += (hoverOffset.targetY - hoverOffset.y) * 0.05
      if (!prefersReducedMotion && !isDragging) {
        camera.position.x = hoverOffset.x * 0.8
        camera.position.y = hoverOffset.y * 0.6
        camera.lookAt(0, 0, 0)
      }

      // Inner component rotations
      coreMesh.rotation.y -= 0.3 * delta * speedFactor
      coreMesh.rotation.z += 0.2 * delta * speedFactor
      halo1.rotation.z += 0.35 * delta * speedFactor
      halo2.rotation.y -= 0.25 * delta * speedFactor
      particles.rotation.y += 0.03 * delta * speedFactor

      renderer.render(scene, camera)
    }

    animate(performance.now())

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', onPointerUp)
      container.removeEventListener('touchstart', onPointerDown)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchend', onPointerUp)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }

      glassGeo.dispose()
      glassMat.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      halo1Geo.dispose()
      halo1Mat.dispose()
      halo2Geo.dispose()
      halo2Mat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
    }
  }, [])

  if (!isSupported) {
    return <FallbackArtwork className={className} />
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing ${className || ''}`}
      aria-label="Interactive 3D Geometric Centerpiece"
      role="img"
    />
  )
}

function FallbackArtwork({ className }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full min-h-[350px] flex items-center justify-center ${className || ''}`}
    >
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/30 flex items-center justify-center bg-radial from-cyan-500/10 via-transparent to-transparent">
        <div className="absolute inset-4 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: '18s' }} />
        <div className="absolute inset-10 rounded-full border border-cyan-400/40 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500/30 to-violet-600/30 blur-md border border-cyan-300/40 shadow-[0_0_50px_rgba(0,240,255,0.3)]" />
      </div>
    </div>
  )
}
