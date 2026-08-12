import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DonationBanner } from './DonationBanner'
import { DONATION_BANNER } from '../data'

describe('DonationBanner', () => {
  it('renders the headline and paragraph over a background image', () => {
    const { container } = render(<DonationBanner />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Donate to help People Around the World' }),
    ).toBeInTheDocument()
    expect(screen.getByText(DONATION_BANNER.subtext)).toBeInTheDocument()

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', DONATION_BANNER.image)
    expect(image).toHaveAttribute('alt', '')
  })
})
