import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'Welcome to Turfly' })).toBeInTheDocument()
    expect(screen.getByText(/dedicated team of lawn care professionals/)).toBeInTheDocument()
  })

  it('renders all feature list items', () => {
    render(<About />)

    expect(screen.getByText('Professional and experienced team')).toBeInTheDocument()
    expect(screen.getByText('Customized lawn care plans')).toBeInTheDocument()
    expect(screen.getByText('Eco-friendly products and methods')).toBeInTheDocument()
    expect(screen.getByText('Affordable and transparent pricing')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction guaranteed on every job')).toBeInTheDocument()
  })

  it('renders the Learn More CTA', () => {
    render(<About />)

    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#contact')
  })

  it('renders the about image', () => {
    render(<About />)

    const img = screen.getByRole('img', { name: /lush green lawn/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
