import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DedicatedSupport } from './DedicatedSupport'

describe('DedicatedSupport', () => {
  it('renders a support band over a photo with headline, CTA, and phone number', () => {
    const { container } = render(<DedicatedSupport />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Dedicated support from engineers who know your stack/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/our team is on call around the clock/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Start Now' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+10 267 367 678 2678/ })).toBeInTheDocument()

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/sitewise-support/1920/800',
    )
  })
})
