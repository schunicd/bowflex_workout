
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import HomeGrid from './components/HomeGrid'
import WorkoutDetail from './components/WorkoutDetail'
import StartWorkout from './components/StartWorkout'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">Better Body Workouts</Link>
          <span className="text-sm text-slate-600">Bowflex-style routines</span>
        </div>
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomeGrid />} />
          <Route path="/workout/:slug" element={<WorkoutDetail />} />
          <Route path="/workout/:slug/start" element={<StartWorkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500">
          © <span>{new Date().getFullYear()}</span> Better Body Workouts — static site for GitHub Pages
        </div>
      </footer>
    </div>
  )
}
