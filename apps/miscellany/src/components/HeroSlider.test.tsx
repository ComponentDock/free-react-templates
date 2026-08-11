import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroDotLabel, heroNextLabel, heroPrevLabel, heroSlides } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with meta line, headline, and photo', () => {
    const { container } = render(<HeroSlider />)
    const first = heroSlides[0]!
    expect(screen.getByRole('link', { name: first.category })).toBeInTheDocument()
    expect(screen.getByText(first.date)).toBeInTheDocument()
    expect(screen.getByText('By Rich')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: first.title })).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBeGreaterThan(0)
  })

  it('advances and goes back through slides with wrap-around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const next = screen.getByRole('button', { name: heroNextLabel })
    const prev = screen.getByRole('button', { name: heroPrevLabel })

    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()

    await user.click(prev)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()

    // wrap-around backwards from the first slide
    await user.click(prev)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[3]!.title }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot controls', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroDotLabel(2) }))
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[2]!.title }),
    ).toBeInTheDocument()
  })

  it('renders one dot per slide', () => {
    render(<HeroSlider />)
    for (let i = 0; i < heroSlides.length; i += 1) {
      expect(screen.getByRole('button', { name: heroDotLabel(i) })).toBeInTheDocument()
    }
  })
})
