import { useState } from 'react'
import { Search, Menu } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch({ q })
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black">NC</div>
          <span className="font-extrabold tracking-tight text-xl">NikeCoach</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#how" className="hover:text-black/70">How it works</a>
          <a href="#sports" className="hover:text-black/70">Sports</a>
          <a href="#coaches" className="hover:text-black/70">Coaches</a>
          <a href="#reviews" className="hover:text-black/70">Reviews</a>
        </nav>
        <form onSubmit={submit} className="hidden md:flex items-center gap-2 bg-black/5 rounded-full px-3 py-2">
          <Search className="w-4 h-4" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search coaches, sports..." className="bg-transparent outline-none text-sm" />
        </form>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <form onSubmit={submit} className="flex items-center gap-2 bg-black/5 rounded-xl px-3 py-2">
            <Search className="w-4 h-4" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search coaches, sports..." className="bg-transparent outline-none text-sm flex-1" />
            <button className="px-3 py-1 rounded-lg bg-black text-white text-xs">Search</button>
          </form>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <a href="#how" className="bg-black/5 rounded-lg p-3">How it works</a>
            <a href="#sports" className="bg-black/5 rounded-lg p-3">Sports</a>
            <a href="#coaches" className="bg-black/5 rounded-lg p-3">Coaches</a>
            <a href="#reviews" className="bg-black/5 rounded-lg p-3">Reviews</a>
          </div>
        </div>
      )}
    </header>
  )
}
