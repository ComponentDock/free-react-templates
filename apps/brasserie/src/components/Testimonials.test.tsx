import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading and author names', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText('Robert Jonson')).toBeInTheDocument()
    expect(screen.getByText('Clara Hudson')).toBeInTheDocument()
    expect(screen.getByText('Jane Black')).toBeInTheDocument()
  })

  it('shows roles and quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText('Food Critic')).toBeInTheDocument()
    expect(screen.getByText('Regular Guest')).toBeInTheDocument()
    expect(screen.getByText('Culinary Blogger')).toBeInTheDocument()
  })
})
