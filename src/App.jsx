import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import useAnimation from './hooks/useAnimation'

export default function App() {
  const { playing, speed, setSpeed, toggle } = useAnimation(true)

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])

  return (
    <Layout>
      <DancingCat playing={playing} speed={speed} onToggle={toggle} />
      <AnimationControls playing={playing} speed={speed} onToggle={toggle} onSpeedChange={setSpeed} />
    </Layout>
  )
}
