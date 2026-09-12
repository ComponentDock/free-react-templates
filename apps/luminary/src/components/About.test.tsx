import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Are We Awesome?')
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
  })

  it('renders feature items', () => {
    render(<About />)
    // "Photography" appears twice in the original design — use getAllByText
    expect(screen.getAllByText('Photography').length).toBe(2)
    expect(screen.getByText('Find It Here')).toBeInTheDocument()
    expect(screen.getByText('Fly Your Dreams')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About Luminary')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('luminary-about'))
  })
})
