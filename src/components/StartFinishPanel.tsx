
import { useState } from 'react'

type Info = { src: string; alt: string; bullets: string[] }

export default function StartFinishPanel({ start, finish }: { start: Info; finish: Info }) {
  return (
    <div className="space-y-6">
      <ImageWithBullets label="Start" info={start} />
      <ImageWithBullets label="Finish" info={finish} />
    </div>
  )
}

function ImageWithBullets({ label, info }: { label: string; info: Info }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow">
      <img src={info.src} alt={info.alt} loading="lazy" className="exercise-step-image" />
      <button onClick={() => setOpen(o => !o)} className="w-full text-left px-4 py-3 font-medium flex items-center justify-between">
        <span>{label}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <ul className="px-6 pb-4 list-disc text-sm text-slate-700">
          {info.bullets.map((b, i) => <li key={i} className="mt-1">{b}</li>)}
        </ul>
      )}
    </div>
  )
}
