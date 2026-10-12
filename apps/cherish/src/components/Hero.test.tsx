import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_CTA, HERO_DATE, HERO_LEAD, HERO_NAMES, HERO_PHOTO, SEAT_TARGET } from '../lib/site'
import { brandButtonClass, heroClass, heroNamesClass, heroScrimClass } from '../lib/styles'

describe('Hero — the photograph the page opens on', () => {
  it('runs the photograph full width with the scrim over it, and names the block', () => {
    render(<Hero />)

    const hero = screen.getByTestId('hero')

    expect(hero.tagName).toBe('SECTION')
    expect(hero.className).toBe(heroClass)
    expect(hero).toHaveAttribute('id', 'today')
    expect(hero).toHaveAttribute('aria-labelledby', 'today-heading')
    expect(hero.style.backgroundImage).toContain(HERO_PHOTO)
    expect(hero.style.scrollMarginTop).toBe('150px')

    expect(screen.getByTestId('hero-scrim').className).toBe(heroScrimClass)
  })

  it('sets the date, the names and the message over it', () => {
    render(<Hero />)

    expect(screen.getByText(HERO_DATE)).toBeInTheDocument()
    expect(screen.getByText(HERO_LEAD)).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveAttribute('id', 'today-heading')
    expect(heading.textContent).toBe(HERO_NAMES)
    expect(heading.className).toBe(heroNamesClass)
  })

  it('sends the reader to the reply card on the one gold button', () => {
    const { container } = render(<Hero />)

    const cta = screen.getByRole('link', { name: HERO_CTA })

    expect(cta).toHaveAttribute('href', SEAT_TARGET)
    expect(cta.className).toContain('bg-brand')
    expect(cta.className).toContain('rounded-none')
    expect(cta.className).not.toContain('bg-primary-600')
    expect(cta.className).not.toContain('rounded-lg')
    expect(brandButtonClass).toContain('bg-brand')
    expect(container.querySelectorAll('svg')).toHaveLength(1)
  })
})
