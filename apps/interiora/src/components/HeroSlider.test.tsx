import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide headline, underlined span, subtext, and CTA', () => {
    render(<HeroSlider />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(HERO_SLIDES[0]!.headline)
    expect(heading.querySelector('span')).toHaveTextContent(HERO_SLIDES[0]!.underline)
    expect(screen.getByText(HERO_SLIDES[0]!.subtext)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Check Our Services' })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('renders one dot per slide and switches slides when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(HERO_SLIDES.length)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      HERO_SLIDES[2]!.headline,
    )
  })

  it('marks the active dot as current', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
