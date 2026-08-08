import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, description, and learn-more button', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })

  it('shows an about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /about/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
