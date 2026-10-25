import { useState } from 'react'
import type { FormEvent } from 'react'
import { site, hero, SURVEY_PROBLEMS } from '../content'
import { Stars, Tick, containerClass } from './ui'

export type SurveyStatus = 'idle' | 'invalid' | 'sent'

export interface SurveyValues {
  name: string
  phone: string
  problem: string
}

export const EMPTY_SURVEY: SurveyValues = { name: '', phone: '', problem: '' }

/** Three fields, and all three are needed before a survey can be booked. */
export function validateSurvey(values: SurveyValues): boolean {
  return (
    values.name.trim().length > 0 && values.phone.trim().length > 0 && values.problem.length > 0
  )
}

const FIELD_CLASS =
  'mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base leading-6 text-ink-800 placeholder:text-ink-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white'

const LABEL_CLASS = 'block text-sm leading-5 font-semibold text-ink-700 dark:text-gray-300'

function SurveyCard() {
  const [values, setValues] = useState<SurveyValues>(EMPTY_SURVEY)
  const [status, setStatus] = useState<SurveyStatus>('idle')

  const update = (key: keyof SurveyValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }))
    setStatus('idle')
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(validateSurvey(values) ? 'sent' : 'invalid')
  }

  return (
    <div
      id="quote"
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:col-span-5 lg:p-8 dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="text-xl leading-7 font-bold text-ink-800 lg:text-2xl lg:leading-8 dark:text-white">
        {hero.card.title}
      </h2>
      <p className="mt-2 text-sm leading-5 text-ink-500 dark:text-gray-400">{hero.card.promise}</p>

      {status === 'sent' ? (
        <div data-testid="survey-sent" className="mt-6 rounded-xl bg-primary-50 p-5 dark:bg-gray-800">
          <p className="text-base font-semibold text-ink-800 dark:text-white">
            Thanks, {values.name.split(' ')[0]}. Your survey is booked.
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-gray-300">
            We will call {values.phone} within the hour on a weekday and confirm a time for the
            camera.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY_SURVEY)
              setStatus('idle')
            }}
            className="mt-4 text-sm font-bold text-primary-700 underline dark:text-primary-300"
          >
            Book another survey
          </button>
        </div>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={submit} noValidate>
          <div>
            <label className={LABEL_CLASS} htmlFor="qf-name">
              Your name
            </label>
            <input
              id="qf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="First and last name"
              value={values.name}
              onChange={(event) => update('name', event.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label className={LABEL_CLASS} htmlFor="qf-phone">
              Phone
            </label>
            <input
              id="qf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="(555) 000-0000"
              value={values.phone}
              onChange={(event) => update('phone', event.target.value)}
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label className={LABEL_CLASS} htmlFor="qf-problem">
              What is happening?
            </label>
            <select
              id="qf-problem"
              name="problem"
              required
              value={values.problem}
              onChange={(event) => update('problem', event.target.value)}
              className={FIELD_CLASS}
            >
              <option value="">Choose the closest match</option>
              {SURVEY_PROBLEMS.map((problem) => (
                <option key={problem} value={problem}>
                  {problem}
                </option>
              ))}
            </select>
          </div>

          {status === 'invalid' ? (
            <p role="alert" className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              All three fields are needed so we can call you back.
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base leading-6 font-bold text-white transition-colors hover:bg-primary-700"
          >
            {hero.card.submit}
          </button>

          <p className="text-center text-xs leading-4 text-ink-400 dark:text-gray-500">
            {hero.card.footnote}
          </p>
        </form>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="bg-ink-50 py-14 lg:py-20 dark:bg-gray-900">
      <div className={containerClass}>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-sm leading-5 font-bold tracking-[0.35px] text-primary-700 uppercase">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-[-1.5px] text-ink-800 sm:text-5xl lg:text-6xl lg:leading-[66px] dark:text-white">
              {hero.headline}{' '}
              <span className="text-primary-600 dark:text-primary-400">{hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-ink-500 dark:text-gray-400">
              {hero.lead}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Stars />
              <span className="text-base font-semibold text-ink-800 dark:text-white">
                {site.rating}
              </span>
              <span className="text-sm text-ink-500/80 dark:text-gray-500">{site.reviews}</span>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {hero.promises.map((promise) => (
                <li key={promise} className="flex items-start gap-2 text-base leading-6 text-ink-700 dark:text-gray-300">
                  <Tick className="mt-1" />
                  {promise}
                </li>
              ))}
            </ul>
          </div>

          <SurveyCard />
        </div>
      </div>
    </section>
  )
}
