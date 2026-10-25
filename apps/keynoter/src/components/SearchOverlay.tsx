import { useEffect, useRef, useState, type FormEvent } from 'react'
import { X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

/**
 * Fixed `#073b4c` overlay behind the header's search square: one field, one
 * submit, one close control, Escape to dismiss. A submitted query answers on
 * the page — the recreation never navigates away from the template.
 */
export function SearchOverlay({
  open,
  onClose,
}: {
  readonly open: boolean
  readonly onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) {
      return undefined
    }
    inputRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) {
    return null
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    setAnswer(
      trimmed.length === 0
        ? 'Type a speaker, a session or a topic.'
        : `No results for “${trimmed}” on this page — every session is listed below.`,
    )
  }

  function close() {
    setQuery('')
    setAnswer(null)
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Keynoter"
      className="fixed inset-0 z-50 flex animate-[overlay-in_0.3s_ease-out] items-center justify-center bg-search px-6"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={close}
        className="absolute top-6 right-6 text-white transition-opacity hover:opacity-70"
      >
        <X aria-hidden="true" className="h-8 w-8" />
      </button>

      <form onSubmit={submit} className="w-full max-w-[500px]">
        <h2 className="mb-6 text-[24px] font-black tracking-[2px] text-white uppercase">Search</h2>
        <div className="flex">
          <label htmlFor="site-search" className="sr-only">
            Search this page
          </label>
          <input
            id="site-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search…"
            className="h-[50px] w-full border border-[#dddddd] bg-white px-[15px] text-[16px] text-[#333333] placeholder:text-[#999999]"
          />
          <Button
            type="submit"
            className="h-[50px] w-[100px] shrink-0 rounded-none bg-[#233ede] text-[16px] font-black tracking-[1px] text-white uppercase hover:bg-[#1b31b8]"
          >
            Search
          </Button>
        </div>
        {answer ? (
          <p role="status" className="mt-4 text-[16px] text-white">
            {answer}
          </p>
        ) : null}
      </form>
    </div>
  )
}
