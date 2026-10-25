import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { QUESTIONS, QUIZ } from '../content'
import { resolveOutcome } from '../lib/quiz'
import { ActionLink, Container, Eyebrow } from './ui'

/**
 * The page's only stateful widget and its only qualifying device: three
 * fieldsets of full-radius chips, one answer per question, and a
 * recommendation card that appears once all three have a value. The card is
 * mounted from the first render so its `role="status"` announcement is reliable
 * — the reference leaves it out of the accessible tree entirely.
 */
export function Quiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const selected = Object.values(answers)
  const complete = selected.length === QUESTIONS.length
  const outcome = resolveOutcome(selected)

  const choose = (question: string, value: string) => {
    setAnswers((current) => ({ ...current, [question]: value }))
  }

  return (
    <section id="quiz" className="section bg-white dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{QUIZ.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-800 sm:text-4xl dark:text-white">
            {QUIZ.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-[1.625] text-ink-500 dark:text-gray-300">
            {QUIZ.lede}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-sand-100 p-8 dark:bg-gray-900">
          {QUESTIONS.map((question) => (
            <fieldset key={question.id} className="mb-6 last:mb-0">
              <legend className="text-base font-semibold leading-6 text-ink-800 dark:text-white">
                {question.legend}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {question.chips.map((chip) => (
                  <button
                    key={chip.value}
                    type="button"
                    aria-pressed={answers[question.id] === chip.value}
                    onClick={() => choose(question.id, chip.value)}
                    className={cn(
                      'inline-flex min-h-[42px] items-center rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium leading-5 text-ink-700 transition-colors hover:border-primary-500',
                      'aria-pressed:border-primary-600 aria-pressed:bg-primary-600 aria-pressed:text-white',
                      'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-primary-400',
                    )}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </fieldset>
          ))}

          <div
            role="status"
            aria-live="polite"
            data-quiz-result
            hidden={!complete}
            className="mt-6 rounded-xl border border-primary-200 bg-white p-6 dark:border-primary-900 dark:bg-gray-950"
          >
            {complete && (
              <>
                <Eyebrow weight="bold">{QUIZ.resultEyebrow}</Eyebrow>
                <p className="mt-2 font-serif text-xl font-semibold leading-7 text-ink-800 dark:text-white">
                  {outcome.product}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-gray-300">
                  {outcome.explanation}
                </p>
                <ActionLink href={outcome.href} size="sm" className="mt-4">
                  {QUIZ.resultCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ActionLink>
                <p className="mt-4 text-sm leading-5 text-ink-400 dark:text-gray-400">
                  {QUIZ.finePrint}
                </p>
              </>
            )}
          </div>

          <p className="mt-4 text-center text-sm text-ink-400 dark:text-gray-400">
            {QUIZ.changeHint}
          </p>
        </div>
      </Container>
    </section>
  )
}
