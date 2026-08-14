import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Typewriter } from './Typewriter'

const words = ['Web Designer.', 'Developer.', 'Photographer.'] as const

describe('Typewriter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first word fully on first paint', () => {
    render(
      <h2>
        I&apos;m a <Typewriter words={words} />
      </h2>,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/I'm a Web Designer\./)
  })

  it('types, holds, deletes and cycles through every word', async () => {
    vi.useFakeTimers()
    render(
      <h2>
        I&apos;m a <Typewriter words={words} typingSpeed={100} holdTime={1000} />
      </h2>,
    )
    const heading = screen.getByRole('heading', { level: 2 })

    const tick = async (count: number) => {
      for (let i = 0; i < count; i += 1) {
        await act(async () => {
          vi.runOnlyPendingTimers()
        })
      }
    }

    // Hold "Web Designer." (13 chars), delete it and start typing "Developer.".
    await tick(1)
    await tick(13)
    await tick(1)
    expect(heading).toHaveTextContent(/I'm a D/)

    // Type "Developer." (10 chars) and hold.
    await tick(9)
    expect(heading).toHaveTextContent(/I'm a Developer\./)
    await tick(1)
    await tick(10)
    await tick(1)
    expect(heading).toHaveTextContent(/I'm a P/)

    // Type "Photographer." (13 chars) and hold, then wrap back to the first word.
    await tick(12)
    expect(heading).toHaveTextContent(/I'm a Photographer\./)
    await tick(1)
    await tick(13)
    await tick(1)
    expect(heading).toHaveTextContent(/I'm a W/)
  })

  it('renders safely with no words', () => {
    render(
      <h2>
        I&apos;m a <Typewriter words={[]} />
      </h2>,
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe("I'm a |")
  })
})
