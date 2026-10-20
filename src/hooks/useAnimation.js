import { useState, useCallback } from 'react'

export default function useAnimation(initial = true) {
  const [playing, setPlaying] = useState(initial)
  const [speed, setSpeed] = useState(1)
  const toggle = useCallback(() => setPlaying((p) => !p), [])
  return { playing, speed, setSpeed, toggle }
}
