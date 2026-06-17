'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 }
  const trailingX = useSpring(cursorX, springConfig)
  const trailingY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // hover listeners for interactive elements
    const addHoverEvents = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], .group')
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true))
        el.addEventListener('mouseleave', () => setIsHovered(false))
      })
    }

    addHoverEvents()
    const observer = new MutationObserver(addHoverEvents)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      observer.disconnect()
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* 1. center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-stone-950 dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* 2. trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-yellow-600"
        animate={{
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(202, 138, 4, 0.03)' : 'rgba(202, 138, 4, 0)',
        }}
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
    </>
  )
}