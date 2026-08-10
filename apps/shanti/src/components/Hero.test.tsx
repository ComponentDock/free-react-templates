import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a full-viewport hero with a cover photo and mauve overlay', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: /hero/i })
    expect(section.className).toContain('min-h-screen')
    const image = screen.getByRole('img', { name: /meditating/i })
    expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/shanti-1\//)
    expect(section.querySelector('[aria-hidden="true"]')).not.toBeNull()
  })

  it('renders the rotating typewriter headline, subheading and pill CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Inspiration For Joyful Living/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Do Yoga today for a better tomorrow')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '15 Day Free Trial' })).toBeInTheDocument()
  })

  it('types, pauses, deletes and rotates through all three phrases', async () => {
    vi.useFakeTimers()
    try {
      render(<Hero />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('Inspiration For Joyful Living.')

      const tick = async (ms: number) => {
        await act(async () => {
          await vi.advanceTimersByTimeAsync(ms)
        })
      }

      await tick(1600) // pause on the fully typed phrase
      for (let i = 0; i < 30; i += 1) {
        await tick(40) // erase each character of phrase one
      }
      await tick(300) // rotate to the next phrase
      for (let i = 0; i < 33; i += 1) {
        await tick(80) // type each character of phrase two
      }
      expect(heading).toHaveTextContent('Effective Therapy Against Stress.')
    } finally {
      vi.useRealTimers()
    }
  })
})
