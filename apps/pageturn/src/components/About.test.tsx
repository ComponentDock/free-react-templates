import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and 3 features', () => {
    render(<About />)

    expect(screen.getAllByText('About The Book').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Award achievements')).toBeInTheDocument()
    expect(screen.getByText('Read On Any Devices')).toBeInTheDocument()
    expect(screen.getByText('Very High Resolution')).toBeInTheDocument()
  })

  it('displays the about image', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: 'Book about' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders feature descriptions', () => {
    render(<About />)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/Separate they live in Bookmarksgrove/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })
})
