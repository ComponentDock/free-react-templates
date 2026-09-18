import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the About Us label', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('Creative We Grow')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/passionate team of designers/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<About />)
    const btn = screen.getByRole('link', { name: /learn more/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#')
  })

  it('has the about section id', () => {
    render(<About />)
    const section = screen.getByText('Creative We Grow').closest('section')
    expect(section).toHaveAttribute('id', 'about')
  })
})
