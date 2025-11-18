import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoachList from './components/CoachList'

function App() {
  const listRef = useRef(null)
  const scrollToList = () => {
    document.getElementById('coaches')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar onSearch={() => scrollToList()} />
      <Hero onExplore={scrollToList} />
      <CoachList ref={listRef} />
      <footer className="py-10 text-center text-sm text-black/60">© {new Date().getFullYear()} NikeCoach — Connecting athletes with great coaches</footer>
    </div>
  )
}

export default App
