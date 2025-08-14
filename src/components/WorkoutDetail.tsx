
import { Link, useNavigate, useParams } from 'react-router-dom'
import { workouts } from '../data/workouts'
import Table from './Table'

export default function WorkoutDetail() {
  const { slug } = useParams()
  const nav = useNavigate()
  const workout = workouts.find(w => w.slug === slug)

  if (!workout) return <div className="max-w-4xl mx-auto p-6">Not found</div>

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{workout.name}</h1>
        <div className="text-sm text-slate-600 mt-1">{workout.frequency} · {workout.duration}</div>
        <p className="mt-4 text-slate-700">{workout.description}</p>
      </div>

      <section aria-labelledby="exercise-table">
        <h2 id="exercise-table" className="text-xl font-semibold mb-3">Exercises</h2>
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <Table rows={workout.exercises.map(e => ({
            bodyPart: e.bodyPart, exercise: e.title, sets: e.sets, reps: e.reps
          }))} />
        </div>
      </section>

      <div className="flex gap-3 pt-4 border-t">
        <button onClick={() => nav(-1)} className="px-4 py-2 rounded-xl border hover:bg-slate-50">Go Back</button>
        <Link to={`/workout/${workout.slug}/start`} className="ml-auto px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Start Workout</Link>
      </div>
    </div>
  )
}
