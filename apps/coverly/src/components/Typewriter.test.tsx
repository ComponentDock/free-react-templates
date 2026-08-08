import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Typewriter } from './Typewriter'

const words = ['Count On', 'Depend On', 'Trust In', 'Rely On'] as const

describe('Typewriter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first word fully on first paint', () => {
    render(
      <h1>
        Protection You Can <Typewriter words={words} />
      </h1>,
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Protection You Can Count On/)
  })

  it('types, holds, deletes and cycles through every word', async () => {
    vi.useFakeTimers()
    render(
      <h1>
        Protection You Can <Typewriter words={words} typingSpeed={100} holdTime={1000} />
      </h1>,
    )
    const heading = screen.getByRole('heading', { level: 1 })

    // Fire exactly one timer per act() flush so React re-runs the effect
    // (and schedules the next timer) between transitions.
    const tick = async (count: number) => {
      for (let i = 0; i < count; i += 1) {
        await act(async () => {
          vi.runOnlyPendingTimers()
        })
      }
    }

    // Hold the first word, then delete it (8 chars) and start the next word.
    await tick(1)
    await tick(8)
    await tick(1)
    expect(heading).toHaveTextContent(/Protection You Can D/)

    // Type "Depend On" (9 chars) and hold.
    await tick(8)
    expect(heading).toHaveTextContent(/Protection You Can Depend On/)
    await tick(1)
    await tick(9)
    await tick(1)
    expect(heading).toHaveTextContent(/Protection You Can T/)

    // Type "Trust In" (8 chars) and hold.
    await tick(7)
    expect(heading).toHaveTextContent(/Protection You Can Trust In/)
    await tick(1)
    await tick(8)
    await tick(1)
    expect(heading).toHaveTextContent(/Protection You Can R/)

    // Type "Rely On" (7 chars) and hold, then wrap back to the first word.
    await tick(6)
    expect(heading).toHaveTextContent(/Protection You Can Rely On/)
    await tick(1)
    await tick(7)
    await tick(1)
    expect(heading).toHaveTextContent(/Protection You Can C/)
  })

  it('renders safely with no words', () => {
    render(
      <h1>
        Protection You Can <Typewriter words={[]} />
      </h1>,
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Protection You Can |')
  })
})
