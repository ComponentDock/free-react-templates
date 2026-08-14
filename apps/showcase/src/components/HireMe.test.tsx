import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HireMe } from './HireMe'

describe('HireMe', () => {
  it('shows the headline, paragraph, and a Hire me button linking to Contact', () => {
    const { container } = render(<HireMe />)
    expect(
      screen.getByRole('heading', { level: 2, name: "I'm Available for freelancing" }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hire me' })).toHaveAttribute(
      'href',
      '#contact-section',
    )
    // Background image + indigo gradient overlay are present and hidden from AT.
    expect(container.querySelectorAll('img[aria-hidden="true"]')).toHaveLength(1)
    expect(container.querySelector('div[aria-hidden="true"]')).toHaveClass('bg-gradient-to-br')
  })
})
