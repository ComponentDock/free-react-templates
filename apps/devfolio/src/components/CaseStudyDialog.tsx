import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { X } from 'lucide-react'
import type { DialogMode, Project } from '../content'
import { ALL, filterRecords } from '../lib/filter'

interface CaseStudyDialogProps {
  readonly project: Project
  readonly mode: DialogMode
  readonly onClose: () => void
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'

/**
 * The single sheet that carries both halves of a project: the technical case
 * study (facts, six sections, the decision callout) and the working demo, whose
 * visible rows are derived from `(query, category)` during render.
 */
export function CaseStudyDialog({ project, mode, onClose }: CaseStudyDialogProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>(ALL)

  const visible = filterRecords(project.records, query, category)
  const categories = [...new Set(project.records.map((record) => record.category))]

  useEffect(() => {
    if (mode === 'demo') {
      searchRef.current!.focus()
      return
    }
    closeRef.current!.focus()
  }, [mode])

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const trapTab = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') {
      return
    }
    const nodes = Array.from(sheetRef.current!.querySelectorAll<HTMLElement>(FOCUSABLE))
    const first = nodes[0] as HTMLElement
    const last = nodes[nodes.length - 1] as HTMLElement
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
      return
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const clear = () => {
    setQuery('')
    setCategory(ALL)
    searchRef.current!.focus()
  }

  const field =
    'mt-1 w-full rounded-[5px] border border-line bg-white px-3 py-2 text-[0.9rem] text-ink'

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close the project sheet"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#08111c]/70"
      />

      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        onKeyDown={trapTab}
        className="relative z-10 max-h-[92vh] w-full max-w-[880px] overflow-y-auto rounded-t-lg bg-white p-6 sm:rounded-lg sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.09em] text-muted">
              {project.eyebrow}
            </p>
            <h2 id="sheet-title" className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)]">
              {project.name}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] border border-line text-ink hover:bg-paper"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <dl className="mt-6 grid gap-4 border-y border-line py-5 sm:grid-cols-4">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.09em] text-muted">
                {fact.label}
              </dt>
              <dd className="m-0 mt-1 text-[0.85rem] leading-[1.6]">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="demo-title" className="mt-8 rounded-[6px] border border-line bg-paper p-5">
          <h3 id="demo-title" className="text-[1.1rem]">
            Working demo
          </h3>
          <p className="mt-1 text-[0.85rem] leading-[1.75] text-muted">
            Every record below is local sample data. Search matches titles, ids and notes.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="demo-search" className="block text-[0.8rem] font-semibold text-ink">
                Search
              </label>
              <input
                ref={searchRef}
                id="demo-search"
                type="search"
                name="demo-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={field}
              />
            </div>

            <div>
              <label htmlFor="demo-filter" className="block text-[0.8rem] font-semibold text-ink">
                {project.filterLabel}
              </label>
              <select
                id="demo-filter"
                name="demo-filter"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className={field}
              >
                <option value={ALL}>{project.optionLabel}</option>
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={clear}
              className="min-h-[42px] rounded-[5px] border border-ink px-[19px] py-2 text-[0.8rem] font-semibold text-ink hover:bg-white"
            >
              Clear filters
            </button>
          </div>

          <p
            aria-live="polite"
            className="mt-4 mb-0 font-mono text-[0.7rem] uppercase tracking-[0.09em] text-muted"
          >
            {visible.length === 0
              ? `0 of ${project.records.length} shown`
              : `${visible.length} of ${project.records.length} shown`}
          </p>

          {visible.length === 0 ? (
            <p className="mt-3 rounded-[5px] border border-dashed border-line bg-white p-4 text-[0.87rem] text-muted">
              {project.emptyState}
            </p>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-left text-[0.85rem]">
                <caption className="sr-only">{project.recordLabel}</caption>
                <thead>
                  <tr className="border-b border-line font-mono text-[0.62rem] uppercase tracking-[0.09em] text-muted">
                    <th scope="col" className="py-2 pr-3">
                      ID
                    </th>
                    <th scope="col" className="py-2 pr-3">
                      Title
                    </th>
                    <th scope="col" className="py-2 pr-3">
                      {project.categoryLabel}
                    </th>
                    <th scope="col" className="py-2">
                      {project.metaLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map((record) => (
                    <tr key={record.id} className="border-b border-line align-top">
                      <td className="py-2 pr-3 font-mono text-[0.75rem] text-muted">{record.id}</td>
                      <td className="py-2 pr-3">
                        {record.title}
                        <span className="mt-1 block text-[0.78rem] text-muted">
                          {record.notes.join(' · ')}
                        </span>
                      </td>
                      <td className="py-2 pr-3">{record.category}</td>
                      <td className="py-2">{record.meta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <div className="mt-10 space-y-7">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-[1.15rem]">{section.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-[1.75] text-muted">{section.body}</p>
              {section.title.startsWith('03') ? (
                <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.7rem] text-ink">
                  {project.flow.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      {step}
                      {index < project.flow.length - 1 ? (
                        <span aria-hidden="true" className="text-muted">
                          ↓
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : null}
            </section>
          ))}
        </div>

        <p className="mt-8 mb-0 rounded-[6px] border-l-[3px] border-brand bg-[#eef3ff] p-4 text-[0.9rem]">
          <span className="block font-mono text-[0.62rem] uppercase tracking-[0.09em] text-brand">
            The decision that mattered
          </span>
          <span className="mt-1 block">{project.decision}</span>
        </p>
      </div>
    </div>
  )
}
