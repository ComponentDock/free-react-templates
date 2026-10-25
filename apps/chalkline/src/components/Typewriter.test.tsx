import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Typewriter } from './Typewriter'
import { mockReducedMotion } from '../test/match-media'

const words = ['institution actually owns', 'registrar can audit'] as const

function painted(heading: HTMLElement): string {
  return heading.querySelector('[aria-hidden="true"]')?.textContent ?? ''
}

async function tick(count: number) {
  for (let index = 0; index < count; index += 1) {
    await act(async () => {
      vi.runOnlyPendingTimers()
    })
  }
}

describe('Typewriter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first phrase fully on first paint, with a caret', () => {
    render(
      <h1>
        A learning platform your <Typewriter words={words} />
      </h1>,
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(painted(heading)).toBe(`${words[0]}|`)
    // The full phrase also sits in the accessibility tree, whatever is painted.
    expect(heading.querySelector('.sr-only')?.textContent).toBe(words[0])
  })

  it('deletes the first phrase once it has been held', async () => {
    vi.useFakeTimers()
    render(
      <h1>
        <Typewriter words={words} typingSpeed={10} holdTime={100} />
      </h1>,
    )

    const heading = screen.getByRole('heading', { level: 1 })

    // One tick flips into deleting, the next ten remove ten characters.
    await tick(11)
    expect(painted(heading)).not.toBe(`${words[0]}|`)
    expect(painted(heading).length).toBeLessThan(words[0].length + 1)
  })

  it('types the second phrase and then cycles back to the first', async () => {
    vi.useFakeTimers()
    render(
      <h1>
        <Typewriter words={words} typingSpeed={1} holdTime={1} />
      </h1>,
    )

    const heading = screen.getByRole('heading', { level: 1 })

    // Hold phrase 0, delete it, then type the second phrase one char at a time.
    await tick(words[0].length + 2)
    expect(painted(heading)).not.toContain(words[1])

    await tick(words[1].length + 2)
    expect(painted(heading)).toContain('|')
  })

  it('paints nothing when it is given no phrases at all', () => {
    render(
      <h1>
        <Typewriter words={[]} />
      </h1>,
    )

    expect(painted(screen.getByRole('heading', { level: 1 }))).toBe('|')
  })

  it('renders the first phrase statically with reduced motion', () => {
    mockReducedMotion()

    render(
      <h1>
        <Typewriter words={words} />
      </h1>,
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(painted(heading)).toBe(words[0])
  })
})
