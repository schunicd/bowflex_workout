
import { Link } from 'react-router-dom'
import { workouts } from '../data/workouts'

export default function HomeGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Choose a Workout</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map(w => (
          <Link key={w.slug} to={`/workout/${w.slug}`} className="group">
            <div className="rounded-2xl bg-white shadow hover:shadow-lg transition p-5 h-full">
              <h2 className="text-lg font-bold group-hover:underline">{w.name}</h2>
              <p className="text-sm text-slate-600 mt-1">{w.description.slice(0, 110)}{w.description.length > 110 ? '…' : ''}</p>
              <div className="mt-4 text-xs text-slate-500">{w.frequency} · {w.duration}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
