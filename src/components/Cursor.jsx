import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    // Touch devices — remove cursor
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    let mx = 0, my = 0, fx = 0, fy = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const smooth = () => {
      fx += (mx - fx) * 0.1
      fy += (my - fy) * 0.1
      follower.style.left = fx + 'px'
      follower.style.top = fy + 'px'
      requestAnimationFrame(smooth)
    }
    smooth()

    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')
    const hoverEls = document.querySelectorAll('a, button, .skill-card, .project-card')
    hoverEls.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover) })

    return () => { document.removeEventListener('mousemove', onMove) }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-follower" ref={followerRef} aria-hidden="true" />
    </>
  )
}
