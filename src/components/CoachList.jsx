import { useEffect, useState } from 'react'
import CoachCard from './CoachCard'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CoachList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState({})

  useEffect(() => { fetchCoaches() }, [])

  const fetchCoaches = async (payload = {}) => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND}/coaches/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const onSearch = (q) => {
    const next = { ...query, ...q }
    setQuery(next)
    fetchCoaches(next)
  }

  const onBook = (coach) => {
    const firstService = coach.services?.[0]
    const name = prompt('Your name')
    const email = prompt('Your email')
    const when = prompt('Preferred date/time (YYYY-MM-DD HH:MM)')
    if (!name || !email || !when || !firstService) return
    const iso = when.replace(' ', 'T')+':00Z'
    const payload = {
      coach_id: coach.id,
      coach_name: coach.full_name,
      athlete_name: name,
      athlete_email: email,
      user_type: 'adult',
      service_name: firstService.name,
      hourly_rate: firstService.rate_per_hour,
      duration_hours: 1,
      scheduled_for: iso
    }
    fetch(`${BACKEND}/bookings`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      .then(r=>r.json()).then(()=>alert('Request sent! The coach will confirm.'))
  }

  return (
    <section id="coaches" className="bg-neutral-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Featured coaches</h2>
            <p className="text-black/60">Browse top-rated coaches near you</p>
          </div>
          <div className="hidden md:block">
            <input onKeyDown={(e)=>{ if(e.key==='Enter') onSearch({ q: e.currentTarget.value }) }} placeholder="Search..." className="px-3 py-2 rounded-lg border border-black/10" />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="h-48 rounded-2xl bg-white border border-black/10 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map(coach => (
              <CoachCard key={coach.id} coach={coach} onBook={onBook} />
            ))}
            {items.length === 0 && (
              <div className="col-span-full text-center text-black/60">No coaches yet. Add some via the backend or ask me to seed data.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
