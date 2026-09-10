import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading and label', () => {
    render(<Services />)
    expect(screen.getByText('Our Service')).toBeInTheDocument()
    expect(screen.getByText('What Service We Offer For You')).toBeInTheDocument()
  })

  it('renders all 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design')).toBeInTheDocument()
    expect(screen.getByText('WP Developing')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(3)
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/fast, responsive/)).toBeInTheDocument()
    expect(screen.getByText(/intuitive and beautiful/)).toBeInTheDocument()
    expect(screen.getByText(/Custom WordPress/)).toBeInTheDocument()
  })
})
