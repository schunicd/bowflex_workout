
type Props = { rows: { bodyPart: string; exercise: string; sets: string; reps: string }[] }

export default function Table({ rows }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100">
          <tr className="text-left">
            <th className="p-3">Body Part</th>
            <th className="p-3">Exercise</th>
            <th className="p-3">Sets</th>
            <th className="p-3">Reps</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{r.bodyPart}</td>
              <td className="p-3">{r.exercise}</td>
              <td className="p-3">{r.sets}</td>
              <td className="p-3">{r.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
