import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { Search } from 'lucide-react'
import { TldSelect, type Tld } from './TldSelect'

/**
 * The wide rounded search bar of the hero: a white 24 px field, the violet TLD
 * chip and the mint action. It never leaves the page — submitting validates
 * locally and answers in a polite live region.
 */
export function DomainSearch() {
  const [name, setName] = useState('')
  const [tld, setTld] = useState<Tld>('.io')
  const [error, setError] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const candidate = name.trim()

    if (candidate === '') {
      setConfirmation('')
      setError('Type the domain you have in mind first.')
      return
    }

    setError('')
    setConfirmation(`${candidate}${tld} looks free — we will e-mail you the next steps.`)
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-[69px] w-full">
      <div className="flex w-full flex-col items-stretch min-[768px]:flex-row min-[768px]:items-center">
        <div className="relative w-full min-[768px]:mr-[30px] min-[768px]:w-[calc(100%-196px)]">
          <label htmlFor="domain-name" className="sr-only">
            Domain name
          </label>
          <input
            id="domain-name"
            name="domain"
            value={name}
            autoComplete="off"
            placeholder="yourdomain"
            onChange={(event) => setName(event.target.value)}
            aria-invalid={error !== ''}
            aria-describedby={error === '' ? undefined : 'domain-error'}
            className="h-[60px] w-full rounded-[12px] bg-surface pr-[150px] pl-[30px] text-[24px] font-medium text-ink placeholder:font-medium placeholder:text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint max-[991px]:h-[50px] max-[991px]:text-[20px] max-[575px]:h-[40px] max-[575px]:text-[16px]"
          />
          <TldSelect value={tld} onChange={setTld} />
        </div>

        <Button
          type="submit"
          className="mt-[18px] h-[60px] w-[166px] shrink-0 rounded-[12px] bg-mint text-[24px] font-semibold text-ink hover:bg-surface hover:text-plum-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint min-[768px]:mt-0 max-[991px]:h-[50px] max-[991px]:text-[20px] max-[575px]:h-[40px] max-[575px]:text-[16px]"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
          Search
        </Button>
      </div>

      {error === '' ? null : (
        <p id="domain-error" role="alert" className="mt-3 text-[14px] font-medium text-mint">
          {error}
        </p>
      )}
      {confirmation === '' ? null : (
        <p role="status" className="mt-3 text-[14px] font-medium text-white">
          {confirmation}
        </p>
      )}
    </form>
  )
}
