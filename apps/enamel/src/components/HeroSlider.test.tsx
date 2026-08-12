import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('shows the first slide with headline, subheading and lime CTA', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Helping Your Stay Happy One/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Everyday We Bring Hope and Smile to the Patient We Serve'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View our works' })).toBeInTheDocument()
    // The second slide is aria-hidden and excluded from the a11y tree.
    expect(
      screen.queryByRole('heading', { name: /Smile Makes A Lasting Impression/i }),
    ).not.toBeInTheDocument()
  })

  it('switches slides with the arrows and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { name: /Smile Makes A Lasting Impression/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /Helping Your Stay Happy One/i }),
    ).not.toBeInTheDocument()

    // Next from the last slide wraps to the first.
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { name: /Helping Your Stay Happy One/i }),
    ).toBeInTheDocument()

    // Previous from the first slide wraps to the last.
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { name: /Smile Makes A Lasting Impression/i }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot controls', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    const firstDot = screen.getByRole('button', { name: 'Go to slide 1' })
    const secondDot = screen.getByRole('button', { name: 'Go to slide 2' })
    expect(firstDot).toHaveAttribute('aria-current', 'true')
    expect(secondDot).not.toHaveAttribute('aria-current')

    await user.click(secondDot)
    expect(secondDot).toHaveAttribute('aria-current', 'true')
    expect(firstDot).not.toHaveAttribute('aria-current')
    expect(
      screen.getByRole('heading', { name: /Smile Makes A Lasting Impression/i }),
    ).toBeInTheDocument()
  })
})
