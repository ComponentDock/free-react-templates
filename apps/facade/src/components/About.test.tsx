import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, and read-more link', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /We are world number one Company/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
