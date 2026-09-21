import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Thousands Of Customers Trust/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(
      screen.getByText(/committed to providing the best financial solutions/i),
    ).toBeInTheDocument()
  })

  it('renders the Our Company and Our Vision sub-headings', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 3, name: 'Our Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Our Vision' })).toBeInTheDocument()
  })

  it('renders the Learn More CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders the about image with accessible alt text', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'About Loanpilot' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
