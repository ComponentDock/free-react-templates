import { OUTCOMES, QUIZ_FALLBACK, type QuizOutcome } from '../content'

/**
 * First match wins, and a match is satisfied when **every** value it lists has
 * been selected. The household answer is collected but never matched — that is
 * how the design is authored, so it gates completion only.
 */
export function resolveOutcome(selected: readonly string[]): QuizOutcome {
  return (
    OUTCOMES.find((outcome) => outcome.match.every((value) => selected.includes(value))) ??
    QUIZ_FALLBACK
  )
}
