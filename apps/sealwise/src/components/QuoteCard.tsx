import { useState } from 'react'
import type { FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { hero, pests } from '../content'
import { validateQuote, type QuoteErrors, type QuoteValues } from '../lib/forms'
import { ActionButton } from './ui'

const EMPTY: QuoteValues = { name: '', phone: '', problem: '' }

const fieldClass =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-base leading-6 text-ink-800 placeholder:text-ink-300 focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100'

/**
 * Three fields, three rules, one success state, and no network call: the card
 * is the design's promise that the price comes before the conversation.
 */
export function QuoteCard() {
  const [values, setValues] = useState<QuoteValues>(EMPTY)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof QuoteValues) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [key]: event.target.value }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateQuote(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }
    setValues(EMPTY)
    setSent(true)
  }

  return (
    <div
      id="quote"
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8 dark:border-gray-800 dark:bg-gray-950"
    >
      <h2 className="text-xl leading-7 font-bold text-ink-800 lg:text-2xl lg:leading-8 dark:text-ink-50">
        {hero.card.title}
      </h2>
      <p className="mt-2 text-sm leading-5 text-ink-500 dark:text-ink-300">{hero.card.sub}</p>

      {sent ? (
        <div className="mt-6 rounded-lg border border-primary-200 bg-primary-50 p-4 dark:border-primary-800 dark:bg-primary-900/30">
          <p role="status" className="text-sm leading-6 font-medium text-primary-800 dark:text-primary-100">
            {hero.card.success}
          </p>
          <ActionButton
            variant="outline"
            className="mt-3 w-full py-2.5"
            onClick={() => setSent(false)}
          >
            Ask about another pest
          </ActionButton>
        </div>
      ) : (
        <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="qf-name" className="block text-sm font-medium text-ink-700 dark:text-gray-300">
              {hero.card.nameLabel}
            </label>
            <input
              id="qf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={hero.card.namePlaceholder}
              value={values.name}
              onChange={update('name')}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'qf-name-error' : undefined}
              className={cn(fieldClass, 'mt-1.5', errors.name && 'border-red-500')}
            />
            {errors.name ? (
              <p id="qf-name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="qf-phone" className="block text-sm font-medium text-ink-700 dark:text-gray-300">
              {hero.card.phoneLabel}
            </label>
            <input
              id="qf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={hero.card.phonePlaceholder}
              value={values.phone}
              onChange={update('phone')}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? 'qf-phone-error' : undefined}
              className={cn(fieldClass, 'mt-1.5', errors.phone && 'border-red-500')}
            />
            {errors.phone ? (
              <p id="qf-phone-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="qf-problem" className="block text-sm font-medium text-ink-700 dark:text-gray-300">
              {hero.card.problemLabel}
            </label>
            <select
              id="qf-problem"
              name="problem"
              value={values.problem}
              onChange={update('problem')}
              aria-invalid={errors.problem ? true : undefined}
              aria-describedby={errors.problem ? 'qf-problem-error' : undefined}
              className={cn(fieldClass, 'mt-1.5 py-2.5', errors.problem && 'border-red-500')}
            >
              <option value="">{hero.card.problemPlaceholder}</option>
              {pests.map((pest) => (
                <option key={pest.slug} value={pest.label}>
                  {pest.label}
                </option>
              ))}
            </select>
            {errors.problem ? (
              <p id="qf-problem-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.problem}
              </p>
            ) : null}
          </div>

          <ActionButton type="submit" className="w-full px-6 py-3.5 text-base">
            {hero.card.submit}
          </ActionButton>
          <p className="text-center text-xs leading-4 text-ink-400">{hero.card.note}</p>
        </form>
      )}
    </div>
  )
}
