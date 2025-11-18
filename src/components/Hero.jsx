export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black to-neutral-800" />
      <div className="absolute -top-32 right-0 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[0.95]">
            Find elite coaches. Train smarter. Level up.
          </h1>
          <p className="mt-6 text-neutral-300 text-lg">
            Book 1:1 training with verified coaches across sports. Real reviews, clear pricing, instant booking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onExplore} className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90">Explore Coaches</button>
            <a href="#how" className="px-5 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20">How it works</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2"><span className="font-bold text-white">10k+</span> athletes</div>
            <div className="flex items-center gap-2"><span className="font-bold text-white">1.5k+</span> coaches</div>
            <div className="flex items-center gap-2"><span className="font-bold text-white">4.9★</span> avg rating</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdGhsZXRlJTIwdHJhaW5pbmd8ZW58MHwwfHx8MTc2MzQzMTcyMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Athlete training" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
          </div>
          <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white font-bold">
            Book today
          </div>
        </div>
      </div>
    </section>
  )
}
