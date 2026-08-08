import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About Me heading and paragraphs', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByText(/over 8 years of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/clean, maintainable code/i)).toBeInTheDocument()
  })
})
