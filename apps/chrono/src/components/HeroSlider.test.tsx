import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { heroButtonLabel, heroNextLabel, heroPreviousLabel, heroSlides } from '../data'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the headline, paragraph, button, and slide image', () => {
    const { container } = render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByText(heroSlides[0]!.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroButtonLabel })).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('navigates between the two slides with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    const next = screen.getByRole('button', { name: heroNextLabel })
    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()

    const previous = screen.getByRole('button', { name: heroPreviousLabel })
    await user.click(previous)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()

    // Wraps around in both directions
    await user.click(previous)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[1]!.title }),
    ).toBeInTheDocument()
    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
  })
})
