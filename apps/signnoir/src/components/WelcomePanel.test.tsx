import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WelcomePanel } from './WelcomePanel'

describe('WelcomePanel', () => {
  it('renders the bold white welcome heading and the blind-texts paragraph', () => {
    render(<WelcomePanel />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Welcome to signup form')
    expect(heading.className).toContain('font-bold')
    expect(heading.className).toContain('text-white')
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('uses a dark photographic background and a black 50% overlay', () => {
    const { container } = render(<WelcomePanel />)
    expect(container.firstElementChild?.getAttribute('style')).toContain(
      'picsum.photos/seed/signnoir-1',
    )
    const overlay = container.querySelector('[aria-hidden="true"]')
    expect(overlay?.className).toContain('bg-overlay/50')
    expect(overlay?.className).toContain('absolute inset-0')
  })

  it('bottom-aligns the text block over the photo', () => {
    const { container } = render(<WelcomePanel />)
    expect(container.firstElementChild?.className).toContain('justify-end')
    expect(container.firstElementChild?.className).toContain('bg-cover')
  })
})
