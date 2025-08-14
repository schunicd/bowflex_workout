
import { useState } from 'react'

type SectionProps = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionSection({ title, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = title.toLowerCase().replace(/\s+/g, '-') + '-panel'
  return (
    <div className="border rounded-xl bg-white/80">
      <button
        className="w-full text-left px-4 py-3 font-medium flex items-center justify-between"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(o => !o)}
      >
        <span>{title}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={panelId} role="region" className="px-4 pb-4 pt-1 text-sm text-slate-700">
          {children}
        </div>
      )}
    </div>
  )
}
