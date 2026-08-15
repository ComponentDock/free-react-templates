import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  heroButtonLabel,
  heroNextLabel,
  heroPreviousLabel,
  heroSlideLabel,
  heroSlides,
} from '../data'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide content', () => {
    render(<HeroSlider />)
    expect(screen.getByText(heroSlides[0].eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroSlides[0].title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroButtonLabel })).toBeInTheDocument()
  })

  it('navigates slides with the next arrow and updates dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0].title)

    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1].title)
    expect(screen.getByRole('button', { name: heroSlideLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('navigates slides with the previous arrow (wraps around)', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroPreviousLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1].title)
  })

  it('wraps forward from the last slide to the first', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0].title)
  })

  it('moves back one slide with the previous arrow', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroNextLabel }))
    await user.click(screen.getByRole('button', { name: heroPreviousLabel }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[0].title)
  })

  it('jumps to a slide via a dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: heroSlideLabel(1) }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroSlides[1].title)
    expect(screen.getByRole('button', { name: heroSlideLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
