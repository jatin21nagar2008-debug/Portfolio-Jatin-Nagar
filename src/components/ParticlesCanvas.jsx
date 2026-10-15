import { useEffect, useRef } from 'react'

export default function ParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], animId

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['rgba(179,71,234,', 'rgba(79,195,247,', 'rgba(0,229,255,', 'rgba(168,85,247,']

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W; this.y = Math.random() * H
        this.vx = (Math.random() - .5) * .4; this.vy = (Math.random() - .5) * .4
        this.r = Math.random() * 2 + .5; this.alpha = Math.random() * .6 + .1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.life = 0; this.maxLife = Math.random() * 300 + 150
      }
      update() {
        this.x += this.vx; this.y += this.vy; this.life++
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H || this.life > this.maxLife) this.reset()
      }
      draw() {
        const p = this.life / this.maxLife
        const fade = p < .1 ? p / .1 : p > .9 ? (1 - p) / .1 : 1
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.alpha * fade + ')'; ctx.fill()
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 100) * .08})`; ctx.lineWidth = .8; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas id="particles-canvas" ref={canvasRef} aria-hidden="true" />
}
