import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText('Find Your Dream Property Today')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CTA />)
    expect(screen.getByText(/browse thousands of properties/i)).toBeInTheDocument()
  })

  it('renders the browse button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /browse properties/i })).toBeInTheDocument()
  })

  it('links to properties section', () => {
    render(<CTA />)
    const link = screen.getByRole('link', { name: /browse properties/i })
    expect(link).toHaveAttribute('href', '#property')
  })
})
