import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline with accent word, and subtext', () => {
    render(<Hero />)
    expect(screen.getByText('Spring/Summer 2032 Collection')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Elevate Your Everyday Style')
    expect(screen.getByText('Everyday')).toHaveClass('text-primary-400')
    expect(screen.getByText(/Discover curated collections of premium fashion/i)).toBeInTheDocument()
  })

  it('renders two CTAs with the correct styles', () => {
    render(<Hero />)
    const primary = screen.getByRole('link', { name: 'Shop Collection' })
    const secondary = screen.getByRole('link', { name: 'Browse Categories' })
    expect(primary).toHaveClass('bg-primary-600')
    expect(secondary).toHaveClass('border-2', 'border-white/30')
  })

  it('renders the stats row, trust chips, and scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('Average Rating')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Premium Products')).toBeInTheDocument()
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('Secure Checkout')).toBeInTheDocument()
    expect(screen.getByText('Scroll')).toBeInTheDocument()
  })
})
