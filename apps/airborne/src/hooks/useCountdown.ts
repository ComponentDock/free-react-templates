import { useEffect, useState } from 'react'
import { diffMask, splitDigits, type FlipDigits, type FlipMask } from '../lib/countdown'

const SECOND = 1000

/** What the clock shows right now plus how it moved on the last tick. */
export interface CountdownState {
  /** The eight digits currently shown, day pair first. */
  digits: FlipDigits
  /** The digits shown before the last change (fed to the falling halves). */
  previous: FlipDigits
  /** One flag per card: true when that card changed on the last tick. */
  changed: FlipMask
  /** Bumped whenever a card changed, so the flip animation can replay. */
  tick: number
}

/** First frame: the digits for `remaining` with nothing flipping. */
function paint(digits: FlipDigits): CountdownState {
  return {
    digits,
    previous: digits,
    changed: digits.map(() => false) as unknown as FlipMask,
    tick: 0,
  }
}

/**
 * A live flip-clock countdown to `target`, ticking once a second. The first
 * frame paints immediately; every later tick repaints only when a digit
 * actually moved, and the interval clears itself once the target has passed.
 */
export function useCountdown(target: number): CountdownState {
  const [state, setState] = useState<CountdownState>(() =>
    paint(splitDigits(Math.max(0, target - Date.now()))),
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = Math.max(0, target - Date.now())
      const digits = splitDigits(remaining)

      if (remaining <= 0) {
        clearInterval(timer)
      }

      setState((current) => {
        const changed = diffMask(current.digits, digits)

        // a tick that lands inside the same second leaves every card alone
        if (!changed.includes(true)) {
          return current
        }

        return { digits, previous: current.digits, changed, tick: current.tick + 1 }
      })
    }, SECOND)

    return () => clearInterval(timer)
  }, [target])

  return state
}
