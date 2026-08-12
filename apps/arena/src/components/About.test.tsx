import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows a heading and supporting copy', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Find out about us in history/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Founded by competitive players/i)).toBeInTheDocument()
  })

  it('shows the two CTAs and an image', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Install Now' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Tutorial' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Arena history/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
