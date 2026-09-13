import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Elixir logo', () => {
    render(<Footer />)
    const matches = screen.getAllByText(/Elixir/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Quick Links', () => {
    render(<Footer />)
    expect(screen.getByText('Supplements')).toBeInTheDocument()
    expect(screen.getByText('Vitamins')).toBeInTheDocument()
    expect(screen.getByText('Diet & Nutrition')).toBeInTheDocument()
    expect(screen.getByText('Tea & Coffee')).toBeInTheDocument()
  })

  it('renders Contact Info', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/i)).toBeInTheDocument()
    expect(screen.getByText(/\+2 392 3929 210/)).toBeInTheDocument()
    expect(screen.getByText(/emailaddress@domain.com/)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
