import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Professional Security You Can Trust')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(/certified security professionals/i)).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<About />)
    expect(screen.getByText(/15 years of industry experience/)).toBeInTheDocument()
    expect(screen.getByText(/Licensed and insured/)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 emergency service/)).toBeInTheDocument()
    expect(screen.getByText(/Competitive and transparent/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('Locksmith working on a lock')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('keyforge-about'))
  })
})
