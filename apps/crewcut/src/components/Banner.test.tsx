import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the headline, blurb, CTA, and hero image', () => {
    render(<Banner />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'HairStyle is a Must try Fashion for all Occasion',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View More Changes' })).toHaveAttribute(
      'href',
      '#service',
    )
    const image = screen.getByRole('img', { name: /barber styling a client/i })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/crewcut-hero/600/650')
  })
})
