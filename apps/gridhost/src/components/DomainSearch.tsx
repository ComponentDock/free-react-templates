import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { TLD_OPTIONS, TLD_ROWS } from '../lib/site'
import { tldTintClass, validateDomain } from '../lib/domain'
import { PillButton } from './Pill'
import { SectionTitle } from './SectionTitle'

const PHOTO = 'https://picsum.photos/seed/gridhost-domain/1600/900'

/**
 * The domain band: a dark photo under a navy wash carrying a left title and a
 * pill search bar (65% input, 13% ending select, 22% pink submit) over the
 * six-column price strip whose labels are tinted by column index rather than by
 * the ending they show.
 */
export function DomainSearch() {
  const [name, setName] = useState('')
  const [tld, setTld] = useState('.com')
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const error = validateDomain(name, tld)
    setStatus(
      error ?? `Checking ${name.trim()}${tld} — availability lands in your inbox in a moment.`,
    )
  }

  return (
    <section id="domains" aria-label="Domain search" className="relative bg-navy">
      <img
        src={PHOTO}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/85" />

      <div className="relative mx-auto w-full max-w-[1140px] px-[15px] py-[70px] min-[992px]:py-[140px]">
        <div className="flex flex-wrap items-end gap-y-[30px]">
          <div className="w-full xl:w-1/3">
            <SectionTitle
              eyebrow="Find your address"
              title="Grab the name before someone else does"
              align="left"
              tone="light"
            />
          </div>

          <div className="w-full xl:w-2/3 xl:pl-[30px]">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full bg-surface px-[15px] pt-[30px] pb-[10px] shadow-search"
            >
              <div className="flex flex-wrap md:flex-nowrap">
                <div className="w-full overflow-hidden rounded-bar md:w-[65%]">
                  <label htmlFor="domain-name" className="sr-only">
                    Domain name
                  </label>
                  <input
                    id="domain-name"
                    name="domain"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="yourbrand"
                    className="h-[60px] w-full border-0 bg-white px-[33px] text-[18px] font-normal text-input placeholder:text-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                  />
                </div>

                <div className="w-full bg-white md:w-[13%]">
                  <label htmlFor="domain-tld" className="sr-only">
                    Domain ending
                  </label>
                  <select
                    id="domain-tld"
                    value={tld}
                    onChange={(event) => setTld(event.target.value)}
                    className="h-[60px] w-full bg-white pl-[43px] font-heading text-[16px] font-semibold text-navy focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                  >
                    {TLD_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full md:w-[22%]">
                  <PillButton type="submit" variant="submit" size="block">
                    Search now
                  </PillButton>
                </div>
              </div>

              <p
                role="status"
                aria-live="polite"
                className="mt-[10px] min-h-[26px] text-[15px] text-muted"
              >
                {status}
              </p>
            </form>

            <ul className="mt-[30px] flex flex-wrap justify-between rounded-tile border border-rule-strip px-[15px] py-[15px]">
              {TLD_ROWS.map((row, index) => (
                <li
                  key={`${row.tld}-${row.price}`}
                  className="w-1/3 border-r border-rule-strip py-[10px] pl-[25px] last:border-r-0 min-[768px]:w-[16%]"
                >
                  <span className={cn('font-heading text-[16px] font-bold', tldTintClass(index))}>
                    {row.tld}
                  </span>
                  <p className="text-[14px] text-muted-alt">{row.price}</p>
                </li>
              ))}
            </ul>

            <p className="mt-[20px] text-[15px] text-white/70">
              Every paid year includes a free transfer and a private DNS zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
