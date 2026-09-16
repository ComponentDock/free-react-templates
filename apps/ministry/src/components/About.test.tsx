import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText('Connect, Grow and Serve with Us')).toBeInTheDocument()
  })

  it('renders subheading', () => {
    render(<About />)
    expect(screen.getByText('Welcome to Ministry Church')).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    const paras = screen.getAllByText(/A small river named Duden/)
    expect(paras.length).toBe(2)
  })

  it('renders Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders image with alt text', () => {
    render(<About />)
    expect(screen.getByAltText('Church community gathering')).toBeInTheDocument()
  })
})
