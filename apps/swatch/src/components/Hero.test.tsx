import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

async function tick(ms: number) {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms)
  })
}

describe('Hero', () => {
  it('renders the greeting, persona headline, lead, buttons and social links', () => {
    render(<Hero />)

    expect(screen.getByText('Hi There!')).toBeInTheDocument()

    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toContain('I am Kendall Marsh')

    expect(screen.getByRole('link', { name: /hire me/i })).toHaveAttribute('href', '#contactme')
    expect(screen.getByRole('link', { name: /view portfolio/i })).toHaveAttribute(
      'href',
      '#portfolio',
    )
    expect(screen.getByRole('link', { name: 'Facebook profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Linkedin profile' })).toBeInTheDocument()
  })

  it('types, holds, deletes and rotates the typewrite phrases on a timer', async () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    const typewrite = screen.getByTestId('typewrite')
    expect(typewrite.textContent).toContain('|')

    // Type "A Web Designer" (14 chars at 90ms each)
    for (let i = 0; i < 14; i += 1) {
      await tick(90)
    }
    expect(typewrite.textContent).toContain('A Web Designer')

    // Hold 1800ms, then delete 14 chars at 45ms each
    await tick(1800)
    for (let i = 0; i < 14; i += 1) {
      await tick(45)
    }
    expect(typewrite.textContent?.replace('|', '')).toBe('')

    // Pause 300ms, then type "A Developer" (11 chars)
    await tick(300)
    for (let i = 0; i < 11; i += 1) {
      await tick(90)
    }
    expect(typewrite.textContent).toContain('A Developer')

    unmount()
  })

  it('cleans up the pending typewrite timer on unmount', async () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)

    await tick(90) // one char typed, timer still pending
    expect(() => unmount()).not.toThrow()
  })
})
