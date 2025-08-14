
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { workouts } from '../data/workouts'
import { AccordionSection } from './ExerciseAccordion'
import StartFinishPanel from './StartFinishPanel'

export default function StartWorkout() {
  const { slug } = useParams()
  const [params, setParams] = useSearchParams()
  const nav = useNavigate()
  const workout = workouts.find(w => w.slug === slug)
  if (!workout) return <div className="max-w-4xl mx-auto p-6">Not found</div>

  const total = workout.exercises.length
  const idx = Math.min(Math.max(parseInt(params.get('step') || '0', 10), 0), total - 1)
  const ex = workout.exercises[idx]

  const goto = (n: number) => {
    const clamped = Math.min(Math.max(n, 0), total - 1)
    setParams({ step: String(clamped) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-sm text-slate-600"><Link to={`/workout/${workout.slug}`} className="underline">Back to {workout.name}</Link></div>
      <h1 className="text-2xl font-bold">{ex.title}</h1>
      <div className="text-slate-600">{ex.bodyPart} · {ex.sets} sets · {ex.reps} reps</div>

      <div className="space-y-3">
        {/* Muscles Worked */}
        <AccordionSection title="Muscles Worked">
          <p className="mb-3">{ex.sections.musclesWorked.summary}</p>
          {(() => {
            const imgs = ex.sections.musclesWorked.images as any;
            const front = (imgs.frontSrc || '').trim();
            const back = (imgs.backSrc || '').trim();
            const count = (front ? 1 : 0) + (back ? 1 : 0);
            if (count === 0) return null;
            return (
              <div className={count === 2 ? "grid sm:grid-cols-2 gap-4" : "grid gap-4"}>
                {front && (
                  <figure className="rounded-xl overflow-hidden bg-white shadow max-w-md mx-auto">
                    <img
                      src={front}
                      alt={ex.sections.musclesWorked.altFront || "Front"}
                      className="exercise-anatomy-image"
                      loading="lazy"
                    />
                    <figcaption className="px-4 py-2 text-xs text-slate-600 text-center">Front</figcaption>
                  </figure>
                )}
                {back && (
                  <figure className="rounded-xl overflow-hidden bg-white shadow max-w-md mx-auto">
                    <img
                      src={back}
                      alt={ex.sections.musclesWorked.altBack || "Back"}
                      className="exercise-anatomy-image"
                      loading="lazy"
                    />
                    <figcaption className="px-4 py-2 text-xs text-slate-600 text-center">Back</figcaption>
                  </figure>
                )}
              </div>
            )
          })()}
          {ex.sections.musclesWorked.details.length > 0 && (
            <ul className="mt-3 list-disc pl-6">
              {ex.sections.musclesWorked.details.map((d, i) => <li key={i} className="mt-1">{d}</li>)}
            </ul>
          )}
        </AccordionSection>
        <AccordionSection title="Position">
          <Bullets items={ex.sections.position} />
        </AccordionSection>
        <AccordionSection title="Accessory">
          <Bullets items={ex.sections.accessory} />
        </AccordionSection>
        <AccordionSection title="Pulleys">
          <Bullets items={ex.sections.pulleys} />
        </AccordionSection>
        <AccordionSection title="Before you begin">
          <Bullets items={ex.sections.beforeYouBegin} />
        </AccordionSection>
        <AccordionSection title="Key Points">
          <Bullets items={ex.sections.keyPoints} />
        </AccordionSection>
      </div>

      <StartFinishPanel start={ex.images.start} finish={ex.images.finish} />

      <div className="h-16" />
      <div className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => goto(idx - 1)} disabled={idx === 0} className="px-4 py-2 rounded-xl border disabled:opacity-50">Prev Exercise</button>
          <div className="ml-auto text-sm text-slate-600">{idx + 1} of {total}</div>
          <button onClick={() => goto(idx + 1)} disabled={idx === total - 1} className="px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-50">Next Exercise</button>
        </div>
      </div>
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 text-sm text-slate-700">
      {items.map((it, i) => <li className="mt-1" key={i}>{it}</li>)}
    </ul>
  )
}
