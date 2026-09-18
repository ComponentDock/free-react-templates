import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the main heading', () => {
    render(<HeroBanner />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Immigration Service Provider')
  })

  it('renders the tagline text', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Welcome To Passage')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/We provide the best immigration services/)).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<HeroBanner />)
    const input = screen.getByRole('textbox', { name: 'Search services' })
    expect(input).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<HeroBanner />)
    const btn = screen.getByRole('button', { name: 'Search' })
    expect(btn).toBeInTheDocument()
  })
})
