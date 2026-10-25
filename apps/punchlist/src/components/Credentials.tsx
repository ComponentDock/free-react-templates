import type { ComponentType } from 'react'
import { BadgeCheck, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { CREDENTIALS, CREDENTIALS_COPY } from '../content'
import type { CredentialIcon } from '../content'
import { BandHeading, Container, Reveal } from './ui'

const ICONS: Record<CredentialIcon, ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  liability: ShieldCheck,
  electrical: Zap,
  checked: BadgeCheck,
  guarantee: Sparkles,
}

/**
 * Four document cards with a 2 px border — the only 2 px border on the page —
 * each a dark icon tile, a title, a body and a mono reference line.
 */
export function Credentials() {
  return (
    <section id="credentials" className="section bg-white dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-6xl">
          <BandHeading
            pill={CREDENTIALS_COPY.pill}
            heading={CREDENTIALS_COPY.heading}
            lede={CREDENTIALS_COPY.lede}
            centered
          />

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((credential, index) => {
              const Icon = ICONS[credential.icon]
              return (
                <Reveal key={credential.title} delay={index * 100} className="h-full">
                  <li className="flex h-full flex-col rounded-2xl border-2 border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-900">
                      <Icon aria-hidden className="h-5 w-5 text-primary-400" />
                    </span>
                    <h3 className="mt-4 text-base font-bold leading-6 text-gray-900 dark:text-white">
                      {credential.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-5 text-gray-600 dark:text-gray-300">
                      {credential.body}
                    </p>
                    <p className="mt-4 border-t border-gray-100 pt-3 font-mono text-xs leading-5 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                      {credential.reference}
                    </p>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
