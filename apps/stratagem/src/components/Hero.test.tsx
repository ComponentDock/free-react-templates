import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Big Opportunity for/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We help businesses grow/i)).toBeInTheDocument()
  })

  it('renders the Our Services CTA button', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /Our Services/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#services')
  })

  it('has a dark background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-navy')
  })
})
