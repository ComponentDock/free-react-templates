import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with eyebrow, title, blurb, price and CTA', () => {
    const { container } = render(<HeroSlider />)

    const headings = screen.getAllByRole('heading', { level: 1, hidden: true })
    expect(headings).toHaveLength(HERO_SLIDES.length)

    const active = container.querySelector('figure:not([aria-hidden])')
    expect(active).not.toBeNull()
    expect(active!.querySelector('h1')!.textContent).toBe(HERO_SLIDES[0]!.title)
    expect(active!.querySelector('span')!.textContent).toBe(HERO_SLIDES[0]!.eyebrow)
    expect(active!.textContent).toContain(HERO_SLIDES[0]!.price)
    expect(active!.querySelector('img')).toBeNull()

    const cta = screen.getByRole('link', { name: 'View Property' })
    expect(cta).toHaveAttribute('href', '#properties')

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled()
  })

  it('advances and returns between slides with arrows and dots', () => {
    const { container } = render(<HeroSlider />)

    const next = screen.getByRole('button', { name: 'Next slide' })
    fireEvent.click(next)

    let active = container.querySelector('figure:not([aria-hidden])')
    expect(active!.querySelector('h1')!.textContent).toBe(HERO_SLIDES[1]!.title)
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeEnabled()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    active = container.querySelector('figure:not([aria-hidden])')
    expect(active!.querySelector('h1')!.textContent).toBe(HERO_SLIDES[0]!.title)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled()

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    active = container.querySelector('figure:not([aria-hidden])')
    expect(active!.querySelector('h1')!.textContent).toBe(HERO_SLIDES[1]!.title)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    active = container.querySelector('figure:not([aria-hidden])')
    expect(active!.querySelector('h1')!.textContent).toBe(HERO_SLIDES[0]!.title)
  })

  it('marks the active dot with aria-current', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).not.toHaveAttribute(
      'aria-current',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
