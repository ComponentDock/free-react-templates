import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '../components/Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/we create modern/i)
  })

  it('renders stat counters', () => {
    render(<Hero />)
    expect(screen.getByText('400+')).toBeInTheDocument()
    expect(screen.getByText('21+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Hero />)
    expect(screen.getByText('Successful projects')).toBeInTheDocument()
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/a small river named duden/i)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /start project/i })
    expect(cta).toHaveAttribute('href', '#portfolio')
  })

  it('renders a section element', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
