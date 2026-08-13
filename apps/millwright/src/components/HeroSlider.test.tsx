import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  it('renders every slide headline with the play button and subtext', () => {
    const { container } = render(<HeroSlider />)

    const headings = screen.getAllByRole('heading', { level: 1, hidden: true })
    expect(headings).toHaveLength(2)
    expect(headings[0]).toHaveTextContent(heroSlides[0]!.headline)
    expect(headings[1]).toHaveTextContent(heroSlides[1]!.headline)

    // Every slide shows a cover image (decorative -> no img role).
    expect(container.querySelectorAll('img')).toHaveLength(2)

    const play = screen.getByRole('link', { name: 'Play video' })
    expect(play).toHaveAttribute('href', '#home')

    // Both slides are rendered (stacked), so both subtexts are in the DOM.
    expect(container.textContent).toContain(heroSlides[0]!.text)
    expect(container.textContent).toContain(heroSlides[1]!.text)
  })

  it('navigates with next/prev arrows and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide from its dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
