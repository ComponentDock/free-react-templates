import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Dozely branding', () => {
    render(<App />)

    expect(document.title).toBe('Dozely — Hotel Booking Template')
  })

  it('renders a full-viewport white section vertically centering the booking card', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    // The page background is plain WHITE — the photo lives INSIDE the card.
    expect(section.style.backgroundImage).toBe('')
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-white/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)
  })

  it('renders the reservation card with the photo background', () => {
    const { container } = render(<App />)

    const card = container.querySelector('[class*="max-w-[642px]"]') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.style.backgroundImage).toContain('picsum.photos/seed/dozely-1/900/675')
  })

  it('renders NO navbar or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
