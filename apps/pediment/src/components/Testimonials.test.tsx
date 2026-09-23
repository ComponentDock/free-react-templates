import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What your clients say')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all 3 testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/attention to detail/)).toBeInTheDocument()
    expect(screen.getByText(/Working with this team/)).toBeInTheDocument()
    expect(screen.getByText(/From concept to completion/)).toBeInTheDocument()
  })

  it('renders client names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Renee Calhoun')).toBeInTheDocument()
    expect(screen.getByText('Marcus Chen')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders client roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO Woolley')).toBeInTheDocument()
    expect(screen.getByText('Director of Operations')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
  })

  it('renders partner logos', () => {
    render(<Testimonials />)
    expect(screen.getByText('Arch Studio')).toBeInTheDocument()
    expect(screen.getByText('Design Co')).toBeInTheDocument()
    expect(screen.getByText('Build Right')).toBeInTheDocument()
  })
})
