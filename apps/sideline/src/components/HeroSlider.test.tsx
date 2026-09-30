import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide headline, blurb and CTA', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Continental Cup Championship/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/road to the continental final/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /read more/i })).toHaveAttribute('href', '#news')
  })

  it('advances to the next slide via the chevron controls', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const next = screen.getByRole('button', { name: 'Next slide' })

    await user.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: /Derby Week Preview/ }),
    ).toBeInTheDocument()
  })

  it('disables the controls at both ends of the slider', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const prev = screen.getByRole('button', { name: 'Previous slide' })
    const next = screen.getByRole('button', { name: 'Next slide' })

    // At the first slide the previous control is disabled.
    expect(prev).toBeDisabled()
    expect(next).not.toBeDisabled()

    await user.click(next)
    expect(prev).not.toBeDisabled()

    await user.click(next)
    // At the last slide the next control is disabled.
    expect(next).toBeDisabled()
    expect(screen.getByRole('heading', { level: 1, name: /Academy Signings/ })).toBeInTheDocument()

    await user.click(prev)
    expect(prev).not.toBeDisabled()
    expect(next).not.toBeDisabled()
  })
})
