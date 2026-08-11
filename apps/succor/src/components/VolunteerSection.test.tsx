import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VolunteerSection } from './VolunteerSection'

describe('VolunteerSection', () => {
  it('renders the volunteer photo panel with the seeded image', () => {
    const { container } = render(<VolunteerSection />)

    const panel = container.querySelector('[class*="bg-cover"]') as HTMLElement
    expect(panel).not.toBeNull()
    expect(panel.style.backgroundImage).toContain('picsum.photos/seed/succor-nature/1200/900')
    // -70px overlap over the hero on desktop.
    expect(panel.className).toMatch(/lg:mt-\[-70px\]/)
  })

  it('renders the "We need volunteers in Africa" block with the yellow Join now button', () => {
    render(<VolunteerSection />)

    const heading = screen.getByRole('heading', { level: 2, name: /We need volunteers in Africa/ })
    expect(heading.className).toMatch(/font-black/)

    const join = screen.getByRole('link', { name: 'Join now' })
    expect(join).toHaveAttribute('href', '#causes')
    expect(join.className).toMatch(/bg-brand/)
    expect(join.className).toMatch(/rounded-\[3px\]/)
    expect(join.className).toMatch(/hover:bg-transparent/)
    expect(join.className).toMatch(/hover:text-brand/)
  })

  it('renders the black donation panel with the heading and the $380,000 counter', () => {
    render(<VolunteerSection />)

    const panel = screen.getByRole('heading', { level: 2, name: /Donation so far/ })
    expect(panel.className).toMatch(/font-black/)
    // jsdom has no IntersectionObserver — the counter falls back to the
    // final value instantly.
    expect(panel.textContent).toContain('$380,000')
    // $ and digits rendered in rgba(255,255,255,0.2) like the source.
    expect(panel.querySelector('span')).toHaveClass('text-white/20')
  })

  it('renders the black Donate now button', () => {
    render(<VolunteerSection />)

    const donate = screen.getByRole('link', { name: 'Donate now' })
    expect(donate).toHaveAttribute('href', '#contact')
    expect(donate.className).toMatch(/bg-black/)
    expect(donate.className).toMatch(/rounded-\[3px\]/)
  })
})
