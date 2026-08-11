import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedSlider } from './FeaturedSlider'
import {
  featuredSlides,
  goToSlideLabel,
  nextSlideLabel,
  previousSlideLabel,
  sliderLabel,
} from '../data'

describe('FeaturedSlider', () => {
  it('renders the first slide with category, serif headline, and meta', () => {
    const { container } = render(<FeaturedSlider />)
    const first = featuredSlides[0]!

    expect(screen.getByRole('region', { name: sliderLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.category)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(first.author))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(first.date))).toBeInTheDocument()
    // Background photo + author avatar.
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })

  it('navigates forward with wrap-around via the next arrow', async () => {
    const user = userEvent.setup()
    render(<FeaturedSlider />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 1, name: featuredSlides[1]!.title }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 1, name: featuredSlides[2]!.title }),
    ).toBeInTheDocument()

    // Wrap from the last slide back to the first.
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 1, name: featuredSlides[0]!.title }),
    ).toBeInTheDocument()
  })

  it('wraps backward via the previous arrow', async () => {
    const user = userEvent.setup()
    render(<FeaturedSlider />)

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(
      screen.getByRole('heading', { level: 1, name: featuredSlides[2]!.title }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators and marks the active dot', async () => {
    const user = userEvent.setup()
    render(<FeaturedSlider />)

    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    await user.click(screen.getByRole('button', { name: goToSlideLabel(3) }))
    expect(
      screen.getByRole('heading', { level: 1, name: featuredSlides[2]!.title }),
    ).toBeInTheDocument()
    expect(dots[0]).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('button', { name: goToSlideLabel(3) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
