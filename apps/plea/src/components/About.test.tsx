import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Best Counseling Funding Network Worldwide',
    )
  })

  it('renders content paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/dedicated to providing/)).toBeInTheDocument()
    expect(screen.getByText(/years of experience/)).toBeInTheDocument()
  })

  it('renders Learn More button', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByAltText('About Plea')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/plea-about/600/400')
  })
})
