import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HireMe } from './HireMe'

describe('HireMe', () => {
  it('renders the amber heading and blurb', () => {
    render(<HireMe />)
    expect(
      screen.getByRole('heading', { level: 2, name: "I'm Available for freelancing" }),
    ).toBeInTheDocument()
    expect(screen.getByText(/small river named Duden/)).toBeInTheDocument()
  })

  it('renders the Hire me button and the -70px overlap class', () => {
    const { container } = render(<HireMe />)
    expect(screen.getByRole('link', { name: 'Hire me' })).toHaveAttribute(
      'href',
      '#contact-section',
    )
    expect(container.querySelector('section')?.className).toContain('-mt-[70px]')
  })
})
