import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ABOUT } from '../data'
import { About } from './About'

describe('About', () => {
  it('renders the arch portrait with the experience badge', () => {
    const { container } = render(<About />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', ABOUT.image)
    expect(img).toHaveAttribute('alt', "Portrait of the firm's managing partner")
    expect(img).toHaveAttribute('class', expect.stringContaining('rounded-tl-[140px]'))
    expect(screen.getByText(ABOUT.badgeNumber)).toBeInTheDocument()
    expect(screen.getByText(ABOUT.badgeLabel)).toBeInTheDocument()
  })

  it('renders the heading, blurb, signature and Read More link', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: ABOUT.heading })).toBeInTheDocument()
    expect(screen.getByText(ABOUT.blurb)).toBeInTheDocument()
    expect(screen.getByText(ABOUT.signature)).toBeInTheDocument()
    expect(screen.getByText(ABOUT.signatureRole)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: ABOUT.readMore })).toHaveAttribute(
      'href',
      ABOUT.readMoreHref,
    )
  })
})
