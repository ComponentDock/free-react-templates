import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, and a call-to-action button', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Built for modern teams/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Ship faster with a page that/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Landing about preview/ })).toBeInTheDocument()
  })
})
