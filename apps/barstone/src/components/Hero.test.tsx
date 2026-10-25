import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders exactly one h1 on the cream field that starts below the header', () => {
    const { container } = render(<Hero />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Finest And Strongest Law Firm')
    expect(heading.className).toContain('font-display')

    const band = container.querySelector('#top') as HTMLElement
    expect(band.className).toContain('bg-white')
    const cream = container.querySelector('[class*="bg-hero-cream"]') as HTMLElement
    expect(cream.className).toContain('[clip-path:polygon(0_15%,100%_27%,100%_100%,0_100%)]')
  })

  it('anchors a lazy portrait to the right edge, cropped by the band and hidden on small screens', () => {
    render(<Hero />)
    const portrait = screen.getByAltText('Barstone partner standing with a tablet')
    const frame = portrait.parentElement as HTMLElement

    expect(portrait).toHaveAttribute('width', '766')
    expect(portrait).toHaveAttribute('loading', 'lazy')
    expect(portrait.className).toContain('object-cover')
    expect(frame.className).toContain('right-[7%]')
    expect(frame.className).toContain('bottom-0')
    expect(frame.className).toContain('hidden')
    expect(portrait.getAttribute('src')).toContain('picsum.photos/seed/barstone-portrait')
  })

  it('carries the subline and a square gold-gradient CTA into the about band', () => {
    render(<Hero />)

    expect(screen.getByText(hero.subline)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: hero.cta.label })
    expect(cta).toHaveAttribute('href', '#about')
    expect(cta.className).toContain('rounded-none')
    expect(cta.className).toContain('bg-[linear-gradient(to_left')
  })
})
