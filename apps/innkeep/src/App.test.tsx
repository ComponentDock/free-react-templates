import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Innkeep branding', () => {
    render(<App />)

    expect(document.title).toBe('Innkeep — Room Booking Template')
  })

  it('renders a full-viewport photo background anchored right-center', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#hero') as HTMLElement
    expect(section).not.toBeNull()
    // Seeded placeholder recreating the source canyon photo (no copied asset).
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/innkeep-bg/1920/1288')
    // div.wrapper — min-height 100vh, cover, no-repeat, right center desktop,
    // centered ≤1199px, hidden ≤767px.
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-no-repeat/)
    expect(section.className).toMatch(/bg-right/)
    expect(section.className).toMatch(/max-\[1199px\]:bg-center/)
    expect(section.className).toMatch(/max-\[767px\]:bg-none/)
  })

  it('renders the form card frame at 11.07% left, vertically centered, 511px wide', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#hero') as HTMLElement
    const frame = section.firstElementChild as HTMLElement
    expect(frame).not.toBeNull()
    // div.inner — absolute, top 50%, left 11.07%, translateY(-50%), width
    // 511px, 7px frame padding, soft drop shadow.
    expect(frame.className).toMatch(/absolute/)
    expect(frame.className).toMatch(/top-1\/2/)
    expect(frame.className).toMatch(/left-\[11\.07%\]/)
    expect(frame.className).toMatch(/-translate-y-1\/2/)
    expect(frame.className).toMatch(/w-\[511px\]/)
    expect(frame.className).toMatch(/p-\[7px\]/)
    expect(frame.className).toMatch(/shadow-\[0_0_10px_0_rgba\(0,0,0,0\.2\)\]/)
    // ≤991px width 60%; ≤767px full-width static with no shadow/frame.
    expect(frame.className).toMatch(/max-\[991px\]:w-\[60%\]/)
    expect(frame.className).toMatch(/max-\[767px\]:static/)
    expect(frame.className).toMatch(/max-\[767px\]:translate-y-0/)
    expect(frame.className).toMatch(/max-\[767px\]:shadow-none/)
    expect(frame.className).toMatch(/max-\[767px\]:p-0/)
  })

  it('renders the booking form inside the card frame', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'FIND A ROOM' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'BOOK ROOM' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-in *')).toBeInTheDocument()
  })

  it('renders NO navbar or footer (one-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
