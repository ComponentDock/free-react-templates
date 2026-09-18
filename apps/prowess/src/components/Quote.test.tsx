import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the quote text', () => {
    render(<Quote />)
    expect(
      screen.getByText(/the only bad workout is the one that didn't happen/i),
    ).toBeInTheDocument()
  })

  it('renders the quote as a blockquote', () => {
    render(<Quote />)
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<Quote />)
    expect(screen.getByText('— Unknown')).toBeInTheDocument()
  })

  it('renders the background image with alt text', () => {
    render(<Quote />)
    expect(screen.getByRole('img', { name: /motivational gym background/i })).toBeInTheDocument()
  })
})
