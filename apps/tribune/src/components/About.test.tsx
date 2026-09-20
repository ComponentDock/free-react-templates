import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading and content', () => {
    render(<About />)
    expect(screen.getByText('What is all about us?')).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About />)
    const img = screen.getByAltText('About the conference')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('tribune-about'))
  })

  it('renders the Join now button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /join now/i })).toBeInTheDocument()
  })
})
