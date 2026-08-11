import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import {
  goToSlideLabel,
  heroSlides,
  heroSlidesLabel,
  nextSlideLabel,
  previousSlideLabel,
} from '../data'

describe('HeroSlider', () => {
  it('renders two slides with the first dot active', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('region', { name: heroSlidesLabel })).toBeInTheDocument()

    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots).toHaveLength(heroSlides.length)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
  })

  it('navigates forward and wraps to the first slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('button', { name: goToSlideLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('button', { name: goToSlideLabel(1) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps backward via the previous arrow', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('button', { name: goToSlideLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: goToSlideLabel(2) }))
    expect(screen.getByRole('button', { name: goToSlideLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: goToSlideLabel(1) })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
