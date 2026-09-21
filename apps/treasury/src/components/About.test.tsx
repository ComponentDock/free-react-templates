import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText('We Solve Your Financial Problem')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })
})
