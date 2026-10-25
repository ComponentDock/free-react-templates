import { useId, useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Message {
  readonly tone: 'error' | 'ok'
  readonly text: string
}

/**
 * The header's underlined search line, 234 px wide. The reference posts to `#`
 * with no label and no validation; this one is labelled, validates the empty
 * field and never leaves the visitor without a message.
 */
export function SearchForm({ className }: { readonly className?: string }) {
  const inputId = useId()
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState<Message | null>(null)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) {
      setMessage({ tone: 'error', text: 'Type a program or a class to search for.' })
      return
    }
    setMessage({ tone: 'ok', text: `No matches for “${trimmed}” on this page.` })
    setQuery('')
  }

  return (
    <form role="search" onSubmit={submit} className={cn('w-full lg:w-[234px]', className)}>
      <label htmlFor={inputId} className="sr-only">
        Search
      </label>
      <div className="relative flex h-11 items-center border-b border-black/30 pl-[30px]">
        <Search aria-hidden="true" className="absolute left-0 h-4 w-4 text-body" />
        <input
          id={inputId}
          type="search"
          placeholder="Search…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-invalid={message?.tone === 'error'}
          className="h-full w-full bg-transparent text-body outline-none placeholder:text-body/70"
        />
        <button
          type="submit"
          className="rounded-btn px-2 text-[13px] font-black tracking-[2.6px] text-brand uppercase"
        >
          Go
        </button>
      </div>
      {message ? (
        <p
          role={message.tone === 'error' ? 'alert' : 'status'}
          className={cn(
            'mt-2 text-[0.9rem]',
            message.tone === 'error' ? 'text-red-700' : 'text-body',
          )}
        >
          {message.text}
        </p>
      ) : null}
    </form>
  )
}
