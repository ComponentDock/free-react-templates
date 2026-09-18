import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Donate')
  })

  it('renders subheading text', () => {
    render(<Hero />)
    expect(screen.getByText(/Together we can make a difference/)).toBeInTheDocument()
  })

  it('renders Donate Now CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /donate now/i })).toBeInTheDocument()
  })

  it('renders three service intro cards', () => {
    render(<Hero />)
    expect(screen.getByText('Give Donation')).toBeInTheDocument()
    expect(screen.getByText('Become Volunteer')).toBeInTheDocument()
    expect(screen.getByText('Give Scholarship')).toBeInTheDocument()
  })

  it('renders Learn More links in service cards', () => {
    render(<Hero />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(3)
  })
})
