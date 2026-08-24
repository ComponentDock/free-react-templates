import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading, bio, and CTA button', () => {
    render(<About />)
    expect(screen.getByText(/A Writer & Author of the Book/)).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'See More Works' })).toBeInTheDocument()
  })

  it('has author image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Author portrait' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
