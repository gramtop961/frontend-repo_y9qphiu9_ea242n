export default function CoachCard({ coach, onBook }) {
  return (
    <div className="group rounded-2xl bg-white p-5 border border-black/10 hover:shadow-xl transition-shadow">
      <div className="flex gap-4">
        <img src={coach.avatar_url || `https://i.pravatar.cc/150?u=${coach.email}`} alt={coach.full_name} className="w-16 h-16 rounded-xl object-cover" />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg">{coach.full_name}</h3>
              <p className="text-sm text-black/60">{coach.location_city}{coach.location_state ? `, ${coach.location_state}` : ''}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{coach.average_rating?.toFixed ? coach.average_rating.toFixed(1) : (coach.average_rating || 0).toString()}★</p>
              <p className="text-xs text-black/60">{coach.review_count || 0} reviews</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-black/80 line-clamp-2">{coach.bio}</p>
          {coach.sports?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {coach.sports.slice(0,4).map(s => (
                <span key={s} className="px-2 py-1 rounded-full bg-black/5">{s}</span>
              ))}
            </div>
          )}
          {coach.services?.length > 0 && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {coach.services.slice(0,2).map((svc, idx) => (
                <div key={idx} className="rounded-xl border border-black/10 p-3">
                  <div className="font-medium">{svc.name}</div>
                  <div className="text-sm text-black/60">${svc.rate_per_hour}/hr</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <button onClick={() => onBook(coach)} className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold">Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
