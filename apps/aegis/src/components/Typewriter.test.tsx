import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Typewriter } from './Typewriter'

const words = ['Strike', 'Spread', 'Escalate', 'Damage'] as const

describe('Typewriter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first word fully on first paint', () => {
    render(
      <h1>
        Stop Threats Before They <Typewriter words={words} />
      </h1>,
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Stop Threats Before They Strike/)
  })

  it('types, holds, deletes and cycles through every word', async () => {
    vi.useFakeTimers()
    render(
      <h1>
        Stop Threats Before They <Typewriter words={words} typingSpeed={100} holdTime={1000} />
      </h1>,
    )
    const heading = screen.getByRole('heading', { level: 1 })

    const tick = async (count: number) => {
      for (let i = 0; i < count; i += 1) {
        await act(async () => {
          vi.runOnlyPendingTimers()
        })
      }
    }

    // Hold "Strike" (6 chars), delete it and start typing "Spread".
    await tick(1)
    await tick(6)
    await tick(1)
    expect(heading).toHaveTextContent(/Stop Threats Before They S/)

    // Type "Spread" (6 chars) and hold.
    await tick(5)
    expect(heading).toHaveTextContent(/Stop Threats Before They Spread/)
    await tick(1)
    await tick(6)
    await tick(1)
    expect(heading).toHaveTextContent(/Stop Threats Before They E/)

    // Type "Escalate" (8 chars) and hold.
    await tick(7)
    expect(heading).toHaveTextContent(/Stop Threats Before They Escalate/)
    await tick(1)
    await tick(8)
    await tick(1)
    expect(heading).toHaveTextContent(/Stop Threats Before They D/)

    // Type "Damage" (6 chars) and hold, then wrap back to the first word.
    await tick(5)
    expect(heading).toHaveTextContent(/Stop Threats Before They Damage/)
    await tick(1)
    await tick(6)
    await tick(1)
    expect(heading).toHaveTextContent(/Stop Threats Before They S/)
  })

  it('renders safely with no words', () => {
    render(
      <h1>
        Stop Threats Before They <Typewriter words={[]} />
      </h1>,
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Stop Threats Before They |')
  })
})
