import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import {
  heroParagraph,
  heroReadMore,
  heroSectionLabel,
  heroSlides,
  heroSubheading,
  nextSlideLabel,
  previousSlideLabel,
} from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with photo, yellow panel, and black CTA', () => {
    const { container } = render(<HeroSlider />)
    expect(screen.getByRole('region', { name: heroSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.heading)
    expect(screen.getByText(heroSubheading)).toBeInTheDocument()
    expect(screen.getByText(heroParagraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroReadMore })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('advances to the second slide with the next control', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.heading)
  })

  it('goes back to the first slide with the previous control', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1]!.heading)

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0]!.heading)
  })
})
