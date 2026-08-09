import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, a quote, and the author', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Client Testimonials' })).toBeInTheDocument()
    expect(screen.getByText(/amazing experience/i)).toBeInTheDocument()
    expect(screen.getByText('Maria Parker')).toBeInTheDocument()
  })

  it('renders an author avatar with an accessible name', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: /Maria Parker/i })).toBeInTheDocument()
  })
})
